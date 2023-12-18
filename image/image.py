import os
from PIL import Image

path = 'cover_short' # 원본 폴더
resultPath = 'cover_short_light' # 대상 폴더

if not os.path.exists(resultPath):
    os.mkdir(resultPath)

list = os.listdir(path)

list.sort()

for filename in list:

    file = os.path.join(path, filename)

    img = Image.open(file)
    img.save(os.path.join(resultPath, filename), 'jpeg', qualty=10) # 품질 85로 줄이면서 용량 줄이기
