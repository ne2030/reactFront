import React, {Component} from 'react';
import profile_img from './profile.jpg';

let space = function(n) {
  let res='', i=0;
  while(i < n) {i++; res+='\u00A0';}
  return res; };

class ProfileMain extends Component {
  render(){
    return (
      <div>
        <img draggable="false" className="profile_img" alt="profile" src={profile_img}/>
        <div className="profile_list">
          <p> 배경훈 </p>
          <p> <span> 출생 </span> {space(1)} 1995년 8월 20일, 대한민국 (22살)</p>
          <p> <span> 학력 </span> {space(1)} 성균관대학교 글로벌경영학과 재학 (14학번) </p>
          <p> <span> 활동 </span> {space(1)} 전국고등학교경제연합(기획총괄) 2012~2013 </p>
          <p> {space(8)} 인액터스 (교육팀장) 2014~2015</p>
          <p> {space(8)} 스페인 순례길 완주 (800km) 2015 </p>
          <p> {space(8)} 프로그래밍 입문 (웹,서버) 2015 ~ 현재 </p>
          <p> <span> 좋아하는 말 </span> {space(1)} Argue for your limitations,
            <br/> {space(20)}
              and sure enough they are yours. </p>
        </div>
      </div>
    );
  }
}

export default ProfileMain;
