import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { FileMeta } from 'src/app/models/fileMeta';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {

  selectedFiles!: FileList;
  currentFile!: FileMeta;
  progress: number =0;

  filesList: FileMeta[]=[];

  constructor(private fileService: FileService, private fireStorage: AngularFireStorage){}

  ngOnInit(): void {
    this.getAllFiles();
  }

  getAllFiles(){
    this.filesList = [];
    this.fileService.getAllFiles().then(res=>{
      res.forEach((doc) => {
        let file: FileMeta = {
          id: doc.id,
          name: doc.data()['name'],
          size: doc.data()['size'],
          url: doc.data()['url'],
          file: doc.data()['file'],
        }

        console.log(file)
        this.filesList.push(file);
      });
    }).catch(err=>{
      alert(err.message);
    })
  }

  selectFile(event: any){
    this.selectedFiles = event.target.files;
  }

  uploadFile(){
    this.currentFile = new FileMeta(this.selectedFiles[0]);

    const path = '/Uploads/'+this.currentFile.file?.name;
    const storageRef = this.fireStorage.ref(path);
    const uploadTask = storageRef.put(this.selectedFiles[0]);

    uploadTask.snapshotChanges().pipe(finalize(()=>{
      storageRef.getDownloadURL().subscribe((link: any)=>{
        this.currentFile.url = link;
        this.currentFile.name = this.currentFile.file?.name || "";
        this.currentFile.size = this.currentFile.file?.size || 0;

        this.fileService.saveFile(this.currentFile).then(res=>{
          this.currentFile.id = res.id;
          this.filesList.push(this.currentFile);
          alert("File Uploaded successfully.");
        });
      })
    })).subscribe((res: any)=>{
      this.progress = (res.bytesTransferred * 100 / res.totalBytes)
    }, err=>{
      alert("Error occured in upload File! "+err.message);
    })
  }

  deleteFile(file: FileMeta){
    if(window.confirm("You really want to delete "+file.name+"?")){
      this.fileService.deleteFile(file.id, file.name).then(res=>{
        const index = this.filesList.findIndex(f=>f.id === file.id);
        this.filesList.splice(index, 1);
        alert("File deleted successfully.");
      }).catch(err=>{
        alert(err.message);
      })
    }
  }
}
