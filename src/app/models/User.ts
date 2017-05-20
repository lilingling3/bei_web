import AppConstants  from "../models/app.constants";
export class User {
  public member: JSON;
  public mobile : string;
  public code : string;
  constructor() {
    this.setMember(JSON.parse(sessionStorage.getItem(AppConstants.JIABEI_USER)))
  }
  public setMember(member){
    this.member=member;
  }
  public getMember(){
    return this.member;
  }
  public deleteMember(){
    this.setMember(null);
    sessionStorage.removeItem(AppConstants.JIABEI_USER);
  }
  public setMobile(mobile){
    this.mobile=mobile;
  }
  public getMobile(){
    return this.mobile;
  }
  public setCode(code){
    this.code=code;
  }
  public getCode(){
    return this.code;
  }
}

export var USER=new User();
