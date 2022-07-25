# Node Gallary

> node.js를 통해 서버 환경 구성 
> 직접 촬영한 사진 파일 전시를 목적으로 함

---

- ~~상세 보기 영역~~
- ~~리스트 영역~~
- ~~이전, 다음 사진으로 이동 영역~~
- ~~댓글 영역 ( 위 기능 구현 후 RDS 연동으로 처리 예정)~~

---

# history
1. 22/01/10 사진 업로드 및  조회 기능 완료
2. 22/01/12 postagreSQL연동 후 댓글 작성 기능 개발 중 ( soucre code 변경. 2021/01/13 )
3. ~~(예정) template engine 고도화 EJS(ASIS) -> react.js(TOBE)~~
4. ~~(예정) S3 이미지 업로드 기능 추가~~
5. 22/07/25 프로젝트 방향 수정 ~~node.js + ejs~~ --> node.js backend api server + react.js frontend server(proj-gallary-react)


---

#
- API server / Client server 분리
  - ~~기존  app.js를 통해 request -> db -> response 구조를  수정~~
  - ~~별도 API server 구축 예정 / Client request -> API server ( db 조회 -> response JSON) -> Client response~~
  - react.js의 학습을 진행하며, front와 back service 분리
