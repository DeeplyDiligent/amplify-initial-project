/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDoctor = `subscription OnCreateDoctor {
  onCreateDoctor {
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
export const onUpdateDoctor = `subscription OnUpdateDoctor($owner: String!) {
  onUpdateDoctor(owner: $owner) {
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
export const onDeleteDoctor = `subscription OnDeleteDoctor($owner: String!) {
  onDeleteDoctor(owner: $owner) {
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
export const onCreateUserMetaData = `subscription OnCreateUserMetaData {
  onCreateUserMetaData {
    hospital
    owner
  }
}
`;
export const onUpdateUserMetaData = `subscription OnUpdateUserMetaData($owner: String!) {
  onUpdateUserMetaData(owner: $owner) {
    hospital
    owner
  }
}
`;
export const onDeleteUserMetaData = `subscription OnDeleteUserMetaData($owner: String!) {
  onDeleteUserMetaData(owner: $owner) {
    hospital
    owner
  }
}
`;
export const onCreateChannel = `subscription OnCreateChannel {
  onCreateChannel {
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
export const onUpdateChannel = `subscription OnUpdateChannel($owner: String!) {
  onUpdateChannel(owner: $owner) {
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
export const onDeleteChannel = `subscription OnDeleteChannel($owner: String!) {
  onDeleteChannel(owner: $owner) {
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
export const onCreateMessage = `subscription OnCreateMessage {
  onCreateMessage {
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
export const onUpdateMessage = `subscription OnUpdateMessage($owner: String!) {
  onUpdateMessage(owner: $owner) {
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
export const onDeleteMessage = `subscription OnDeleteMessage($owner: String!) {
  onDeleteMessage(owner: $owner) {
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
export const onCreateFile = `subscription OnCreateFile {
  onCreateFile {
    id
    createdAt
    image
    link
    owner
  }
}
`;
export const onUpdateFile = `subscription OnUpdateFile($owner: String!) {
  onUpdateFile(owner: $owner) {
    id
    createdAt
    image
    link
    owner
  }
}
`;
export const onDeleteFile = `subscription OnDeleteFile($owner: String!) {
  onDeleteFile(owner: $owner) {
    id
    createdAt
    image
    link
    owner
  }
}
`;
