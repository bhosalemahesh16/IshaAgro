import { Component, OnInit } from '@angular/core';
import { AddstateService } from './addstate.service';

@Component({
  selector: 'app-addstate',
  templateUrl: './addstate.component.html',
  styleUrls: ['./addstate.component.css'],
  providers:[AddstateService]
})
export class AddstateComponent implements OnInit {
  id: string;
  statename1: string;
  statesDetail: any;
  constructor(
    private addstateService:AddstateService
  ) { }

  ngOnInit() {
    this.ngOnChanges();
  }

  ngOnChanges(){
    
    this.addstateService.getAllstates().subscribe(res=>{
      console.log(res);
      this.statesDetail=res;
    },err=>{
      console.log(err);
    })

  }

  onSubmit(frm:any){
    console.log(frm);
    if(frm._id){
      //update
      this.addstateService.updatestates(frm).subscribe(res=>{
        console.log(res);
        alert("updated Sucessfully");
        this.ngOnChanges();
      },err=>{
        console.log(err);
      })
    }
    else{
      //insert
      this.addstateService.onSubmit(frm).subscribe(res=>{
        console.log(res);
        this.ngOnChanges();
      },err=>{
  
      });
    }
    
  }

  editRecord(id:string){
    console.log(id);
    this.addstateService.getCurrentstates(id).subscribe(res=>{
      console.log(res['result']);
      
      this.id=res['result']['_id'];
      this.statename1=res['result']['stateName'];
      

    },err=>{
      console.log(err);
    })
 
  }

  deleteRecord(id:string){
    console.log(id);
    if(confirm("Are You Sure Want to Delete this record?")){
      this.addstateService.deletestates(id).subscribe(res=>{
        console.log(res);
        this.ngOnChanges();
        alert("Record Delete Sucessfully");
      },err=>{
        console.log(err)
      })
    }
    
  }

  

}

