export const GRAPHQL_API="http://localhost:8000/graphql"
export const GET_QUESTIONS_QUERY=`
query{
    allQuestions{
        id
        question
        right_answers
      }
  }
`;

export const GET_ROBOTS_QUERY=`
query{
  robot(id:1){
    id
    description
  }
}
`;

export const GET_Operator_QUERY=`
query{
  operator(id:1){
    first_name
    
  }
  }
`;


export const GET_Building_QUERY=`
query{
  building(id:1){
    address
  }
  }
`;





