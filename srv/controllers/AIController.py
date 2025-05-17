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


    # prompt = "is '" + thought.thought + "' a coginitive distortion? Respond which types and why(shortly for every type detected) your response should look like '<type> <reason>' or '<no> < very SHORT response>' no indexing, no open message, no ending/summary"
    prompt = "Is the following thought a cognitive distortion? Reply in the format '<type> - <very short reason>' or 'no - <very short reason>'. Only one line. No intro, no summary. Thought: " + thought.thought
    completion = client.chat.completions.create(
        model="deepseek/deepseek-chat-v3-0324:free",
        store=True,
        messages=[{"role": "user", "content": prompt}],
    )

    # print(completion)
    # return distortionResponse(response=prompt)
    return distortionResponse(response=completion.choices[0].message.content)
