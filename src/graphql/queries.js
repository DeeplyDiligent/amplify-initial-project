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
      }
      createdAt
      channels {
        id
        lastMesssage
        createdAt
      }
      doctorDescription
      doctorSpecialisation
    }
    nextToken
  }
}
`;
export const getUserMetaData = `query GetUserMetaData($id: ID!) {
  getUserMetaData(id: $id) {
    hospital
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
        }
      }
      messages {
        nextToken
      }
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
    }
    nextToken
  }
}
`;
