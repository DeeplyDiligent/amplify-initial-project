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
export const onUpdateDoctor = `subscription OnUpdateDoctor {
  onUpdateDoctor {
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
export const onDeleteDoctor = `subscription OnDeleteDoctor {
  onDeleteDoctor {
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
export const onCreateUserMetaData = `subscription OnCreateUserMetaData {
  onCreateUserMetaData {
    hospital
  }
}
`;
export const onUpdateUserMetaData = `subscription OnUpdateUserMetaData {
  onUpdateUserMetaData {
    hospital
  }
}
`;
export const onDeleteUserMetaData = `subscription OnDeleteUserMetaData {
  onDeleteUserMetaData {
    hospital
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
export const onUpdateChannel = `subscription OnUpdateChannel {
  onUpdateChannel {
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
export const onDeleteChannel = `subscription OnDeleteChannel {
  onDeleteChannel {
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
export const onUpdateMessage = `subscription OnUpdateMessage {
  onUpdateMessage {
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
export const onDeleteMessage = `subscription OnDeleteMessage {
  onDeleteMessage {
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
export const onCreateFile = `subscription OnCreateFile {
  onCreateFile {
    id
    createdAt
    image
    link
  }
}
`;
export const onUpdateFile = `subscription OnUpdateFile {
  onUpdateFile {
    id
    createdAt
    image
    link
  }
}
`;
export const onDeleteFile = `subscription OnDeleteFile {
  onDeleteFile {
    id
    createdAt
    image
    link
  }
}
`;
