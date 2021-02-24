import { gql } from "@apollo/client";

export const CREATE_RSVP = gql`
  mutation rsvp(
    $houshold: String
    $head: String
    $phone: String
    $people: _text
    $message: String
  ) {
    insert_rsvp(
      objects: {
        houshold: $houshold
        head: $head
        phone: $phone
        people: $people
        message: $message
      }
    ) {
      returning {
        id
      }
      affected_rows
    }
  }
`;

export const GET_RSVP_PK = gql`
  query rsvp($id: uuid!) {
    rsvp_by_pk(id: $id) {
      id
      name
      email
      phone
      message
      status_visits
      responded
      created_at
      updated_at
    }
  }
`;

const amont = `
  rsvp_aggregate {
    aggregate {
      count
    }
  }
`;

export const GET_RSVPS = gql`
  query rsvp($offset: Int, $limit: Int) {
    rsvp(offset: $offset, limit: $limit, order_by: { created_at: desc }) {
      id
      houshold
      head
      people
      created_at
    }
    ${amont}
  }
`;

export const GET_RSVPS_AMOUNT = gql`query rsvp {${amont}}`;
