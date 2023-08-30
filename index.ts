import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  console.log("Lambda excecuted sucessfully");
  console.log(`Event: ${event}`);

  const responseBody = {
    message: "Hello from Lambda!",
    input: event,
  };

  return {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  };
};
