from openai import OpenAI
from fastapi import HTTPException, status
from pydantic import BaseModel

from ..database import SessionDep

from ..app import app

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="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"
    
)

# completion = client.chat.completions.create(
#         model="deepseek/deepseek-chat-v3-0324:free",
#         store=True,
#         messages=[{"role": "user", "content": "write a haiku about ai"}],
# )

# print("XD")
# print(completion.choices[0].message.content)

class distortionResponse(BaseModel):
    response: str

class distortionRequest(BaseModel):
    thought: str

@app.post(
    "/distortion/", response_model=distortionResponse, status_code=status.HTTP_200_OK
)
def create_user(thought: distortionRequest, session: SessionDep):

    # prompt = "is " + thought.thought + "distortion respond which types and why(shortly for every type) your response should look like\
    # <type>\
    # <reason>\
    # or\
    # <no>\
    # <short response>\
    # no indexing, no open message, no ending/summary" 

    # print(prompt)
    completion = client.chat.completions.create(
        model="deepseek/deepseek-chat-v3-0324:free",
        store=True,
        messages=[{"role": "user", "content": thought.thought}],
    )
    
    return distortionResponse(response=completion.choices[0].message.content)
