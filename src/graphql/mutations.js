/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDoctor = `mutation CreateDoctor($input: CreateDoctorInput!) {
  createDoctor(input: $input) {
    id
    email
    imageUrl
    publicKey
    userType
    staffId
    metaData {
      hospital
      owner
    }
    createdAt
    channels {
      id
      lastMesssage
      createdAt
      users {
        id
        email
        imageUrl
        staffId
        publicKey
        userType
        createdAt
        ... on Doctor {
          doctorDescription
          doctorSpecialisation
          owner
        }
      }
      messages {
        nextToken
      }
      owner
    }
    doctorDescription
    doctorSpecialisation
    owner
  }
}
`;
export const updateDoctor = `mutation UpdateDoctor($input: UpdateDoctorInput!) {
  updateDoctor(input: $input) {
    id
    email
    imageUrl
    publicKey
    userType
    staffId
    metaData {
      hospital
      owner
    }
    createdAt
    channels {
      id
      lastMesssage
      createdAt
      users {
        id
        email
        imageUrl
        staffId
        publicKey
        userType
        createdAt
        ... on Doctor {
          doctorDescription
          doctorSpecialisation
          owner
        }
      }
      messages {
        nextToken
      }
      owner
    }
    doctorDescription
    doctorSpecialisation
    owner
  }
}
`;
export const deleteDoctor = `mutation DeleteDoctor($input: DeleteDoctorInput!) {
  deleteDoctor(input: $input) {
    id
    email
    imageUrl
    publicKey
    userType
    staffId
    metaData {
      hospital
      owner
    }
    createdAt
    channels {
      id
      lastMesssage
      createdAt
      users {
        id
        email
        imageUrl
        staffId
        publicKey
        userType
        createdAt
        ... on Doctor {
          doctorDescription
          doctorSpecialisation
          owner
        }
      }
      messages {
        nextToken
      }
      owner
    }
    doctorDescription
    doctorSpecialisation
    owner
  }
}
`;
export const createUserMetaData = `mutation CreateUserMetaData($input: CreateUserMetaDataInput!) {
  createUserMetaData(input: $input) {
    hospital
    owner
  }
}
`;
export const updateUserMetaData = `mutation UpdateUserMetaData($input: UpdateUserMetaDataInput!) {
  updateUserMetaData(input: $input) {
    hospital
    owner
  }
}
`;
export const deleteUserMetaData = `mutation DeleteUserMetaData($input: DeleteUserMetaDataInput!) {
  deleteUserMetaData(input: $input) {
    hospital
    owner
  }
}
`;
export const createChannel = `mutation CreateChannel($input: CreateChannelInput!) {
  createChannel(input: $input) {
    id
    lastMesssage
    createdAt
    users {
      id
      email
      imageUrl
      staffId
      publicKey
      userType
      metaData {
        hospital
        owner
      }
      createdAt
      channels {
        id
        lastMesssage
        createdAt
        owner
      }
      ... on Doctor {
        doctorDescription
        doctorSpecialisation
        owner
      }
    }
    messages {
      items {
        id
        text
        createdAt
        reactions
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const updateChannel = `mutation UpdateChannel($input: UpdateChannelInput!) {
  updateChannel(input: $input) {
    id
    lastMesssage
    createdAt
    users {
      id
      email
      imageUrl
      staffId
      publicKey
      userType
      metaData {
        hospital
        owner
      }
      createdAt
      channels {
        id
        lastMesssage
        createdAt
        owner
      }
      ... on Doctor {
        doctorDescription
        doctorSpecialisation
        owner
      }
    }
    messages {
      items {
        id
        text
        createdAt
        reactions
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const deleteChannel = `mutation DeleteChannel($input: DeleteChannelInput!) {
  deleteChannel(input: $input) {
    id
    lastMesssage
    createdAt
    users {
      id
      email
      imageUrl
      staffId
      publicKey
      userType
      metaData {
        hospital
        owner
      }
      createdAt
      channels {
        id
        lastMesssage
        createdAt
        owner
      }
      ... on Doctor {
        doctorDescription
        doctorSpecialisation
        owner
      }
    }
    messages {
      items {
        id
        text
        createdAt
        reactions
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
    id
    channel {
      id
      lastMesssage
      createdAt
      users {
        id
        email
        imageUrl
        staffId
        publicKey
        userType
        createdAt
        ... on Doctor {
          doctorDescription
          doctorSpecialisation
          owner
        }
      }
      messages {
        nextToken
      }
      owner
    }
    text
    createdAt
    reactions
    files {
      id
      createdAt
      image
      link
      owner
    }
    owner
  }
}
`;
export const updateMessage = `mutation UpdateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
    id
    channel {
      id
      lastMesssage
      createdAt
      users {
        id
        email
        imageUrl
        staffId
        publicKey
        userType
        createdAt
        ... on Doctor {
          doctorDescription
          doctorSpecialisation
          owner
        }
      }
      messages {
        nextToken
      }
      owner
    }
    text
    createdAt
    reactions
    files {
      id
      createdAt
      image
      link
      owner
    }
    owner
  }
}
`;
export const deleteMessage = `mutation DeleteMessage($input: DeleteMessageInput!) {
  deleteMessage(input: $input) {
    id
    channel {
      id
      lastMesssage
      createdAt
      users {
        id
        email
        imageUrl
        staffId
        publicKey
        userType
        createdAt
        ... on Doctor {
          doctorDescription
          doctorSpecialisation
          owner
        }
      }
      messages {
        nextToken
      }
      owner
    }
    text
    createdAt
    reactions
    files {
      id
      createdAt
      image
      link
      owner
    }
    owner
  }
}
`;
export const createFile = `mutation CreateFile($input: CreateFileInput!) {
  createFile(input: $input) {
    id
    createdAt
    image
    link
    owner
  }
}
`;
export const updateFile = `mutation UpdateFile($input: UpdateFileInput!) {
  updateFile(input: $input) {
    id
    createdAt
    image
    link
    owner
  }
}
`;
export const deleteFile = `mutation DeleteFile($input: DeleteFileInput!) {
  deleteFile(input: $input) {
    id
    createdAt
    image
    link
    owner
  }
}
`;
