# node-gallery-api-server

---

- 사진, 댓글  정보를 조회하기 위한 API server
- URL : http://localhost:13000/{information}/{object}
  
- PHOTOS
  - (select all: GET) /photos
  - (select by id: GET) /photo/{id}
- COMMENTS
  - (select all: GET) /comments
  - (select by photo id: GET) /comment/{photoId}
  - (insert comment: POST) /comment/{photoId}
