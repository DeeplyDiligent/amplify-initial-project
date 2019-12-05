/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDoctor = `query GetDoctor($id: ID!) {
  getDoctor(id: $id) {
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
export const listDoctors = `query ListDoctors(
  $filter: ModelDoctorFilterInput
  $limit: Int
  $nextToken: String
) {
  listDoctors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        owner
      }
      doctorDescription
      doctorSpecialisation
      owner
    }
    nextToken
  }
}
`;
export const getUserMetaData = `query GetUserMetaData($id: ID!) {
  getUserMetaData(id: $id) {
    hospital
    owner
  }
}
`;
export const listUserMetaDatas = `query ListUserMetaDatas(
  $filter: ModelUserMetaDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserMetaDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      hospital
      owner
    }
    nextToken
  }
}
`;
export const getChannel = `query GetChannel($id: ID!) {
  getChannel(id: $id) {
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
export const listChannels = `query ListChannels(
  $filter: ModelChannelFilterInput
  $limit: Int
  $nextToken: String
) {
  listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getMessage = `query GetMessage($id: ID!) {
  getMessage(id: $id) {
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
export const listMessages = `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      channel {
        id
        lastMesssage
        createdAt
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
    nextToken
  }
}
`;
export const getFile = `query GetFile($id: ID!) {
  getFile(id: $id) {
    id
    createdAt
    image
    link
    owner
  }
}
`;
export const listFiles = `query ListFiles(
  $filter: ModelFileFilterInput
  $limit: Int
  $nextToken: String
) {
  listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      image
      link
      owner
    }
    nextToken
  }
}
`;
