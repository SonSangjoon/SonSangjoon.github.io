import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.
const PROFILE_IMAGE_LINK =
  'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif'

const ProfileImageWrapper = styled.img`
    width: 120px;
    height: 120px;
    margin-bottom: 30px;
    border-radius: 50%;
  
    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }
  `
const ProfileImage: FunctionComponent = () => {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage