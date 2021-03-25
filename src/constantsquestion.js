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
    allRobots{
      id
      description
      building{
        id
        address
        description
      }
    }
  }
`;



