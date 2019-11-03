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
        }
      }
      messages {
        nextToken
      }
    }
    doctorDescription
    doctorSpecialisation
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
        }
      }
      messages {
        nextToken
      }
    }
    doctorDescription
    doctorSpecialisation
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
        }
      }
      messages {
        nextToken
      }
    }
    doctorDescription
    doctorSpecialisation
  }
}
`;
export const createUserMetaData = `mutation CreateUserMetaData($input: CreateUserMetaDataInput!) {
  createUserMetaData(input: $input) {
    hospital
  }
}
`;
export const updateUserMetaData = `mutation UpdateUserMetaData($input: UpdateUserMetaDataInput!) {
  updateUserMetaData(input: $input) {
    hospital
  }
}
`;
export const deleteUserMetaData = `mutation DeleteUserMetaData($input: DeleteUserMetaDataInput!) {
  deleteUserMetaData(input: $input) {
    hospital
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
      }
      createdAt
      channels {
        id
        lastMesssage
        createdAt
      }
      ... on Doctor {
        doctorDescription
        doctorSpecialisation
      }
    }
    messages {
      items {
        id
        text
        createdAt
        reactions
      }
      nextToken
    }
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
      }
      createdAt
      channels {
        id
        lastMesssage
        createdAt
      }
      ... on Doctor {
        doctorDescription
        doctorSpecialisation
      }
    }
    messages {
      items {
        id
        text
        createdAt
        reactions
      }
      nextToken
    }
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
      }
      createdAt
      channels {
        id
        lastMesssage
        createdAt
      }
      ... on Doctor {
        doctorDescription
        doctorSpecialisation
      }
    }
    messages {
      items {
        id
        text
        createdAt
        reactions
      }
      nextToken
    }
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
        }
      }
      messages {
        nextToken
      }
    }
    text
    createdAt
    reactions
    files {
      id
      createdAt
      image
      link
    }
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
        }
      }
      messages {
        nextToken
      }
    }
    text
    createdAt
    reactions
    files {
      id
      createdAt
      image
      link
    }
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
        }
      }
      messages {
        nextToken
      }
    }
    text
    createdAt
    reactions
    files {
      id
      createdAt
      image
      link
    }
  }
}
`;
export const createFile = `mutation CreateFile($input: CreateFileInput!) {
  createFile(input: $input) {
    id
    createdAt
    image
    link
  }
}
`;
export const updateFile = `mutation UpdateFile($input: UpdateFileInput!) {
  updateFile(input: $input) {
    id
    createdAt
    image
    link
  }
}
`;
export const deleteFile = `mutation DeleteFile($input: DeleteFileInput!) {
  deleteFile(input: $input) {
    id
    createdAt
    image
    link
  }
}
`;
