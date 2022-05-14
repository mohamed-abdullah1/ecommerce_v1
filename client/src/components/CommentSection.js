import { Button, Rating, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Comments,
  CommentForm,
  CommentsList,
  Comment,
  RatingContainer,
  UserInfo,
  RatingContainerInForm,
} from "./styles/CommentSection.styled";
const MONTHS = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sep",
  "Oct",
  "Nov",
  "December",
];
const CommentSection = ({ productId, getFullRating }) => {
  const CREATE_REVIEW_URL = `http://localhost:9898/api/products/${productId}/reviews`;
  const [comment, setComment] = useState();
  const [rating, setRating] = useState(0);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const { username, accessToken } = useSelector(
    (state) => state.user.currentUser
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("i am in handleSubmit");
    if (comment && rating > 0) {
      setLoading(true);
      axios
        .post(
          CREATE_REVIEW_URL,
          { username, rating, comment },
          { headers: { token: `Bearer ${accessToken}` } }
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  };
  useEffect(() => {
    if (loading === false) {
      axios
        .get(`http://localhost:9898/api/products/find/${productId}`)
        .then((response) => {
          console.log("response", response);
          setProduct(response.data);
          getFullRating(response.data.rating);
        })
        .catch((err) => console.log(err));
    }
  }, [loading]);

  return (
    <Container>
      <Comments>
        <h2>Comments</h2>
        <CommentsList>
          {product?.reviews?.map((review) => (
            <Comment key={review._id}>
              <UserInfo>
                <span style={{ fontWeight: "800", fontSize: "20px" }}>
                  @{review.username}
                </span>
                <span style={{ color: "#adadad" }}>
                  {" "}
                  {review.date.slice(8, 10)}{" "}
                  {
                    MONTHS.filter(
                      (month, index) =>
                        index + 1 === Number(review.date.slice(5, 7))
                    )[0]
                  }{" "}
                  {review.date.slice(2, 4)}
                </span>
              </UserInfo>
              <p>{review.comment}</p>
              <RatingContainer>
                <Rating
                  name="simple-controlled"
                  value={review.rating}
                  sx={{ justifyContent: "flex-start", display: "flex" }}
                  readOnly
                  precision={0.1}
                />
              </RatingContainer>
            </Comment>
          ))}
        </CommentsList>
      </Comments>
      {!product?.reviews?.map((item) => item.username).includes(username) ? (
        <CommentForm onSubmit={handleSubmit}>
          <h3>Leave a Comment</h3>
          <TextField
            sx={{ width: "100%", margin: "10px 0 5px 0" }}
            label="Enter Your Comment"
            name="commentText"
            multiline
            rows={6}
            required
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <RatingContainerInForm>
            <Rating
              name="simple-controlled"
              value={rating}
              required
              size="large"
              onChange={(event, newValue) => {
                console.log(newValue);
                setRating(newValue);
              }}
              precision={0.5}
            />{" "}
            <Button
              sx={{
                bgcolor: "#140005",
                color: "white",
                padding: "10px 20px",
                display: "block",
                width: "80%",
                "&:hover": { bgcolor: "#35000d", color: "white" },
              }}
              type="submit"
            >
              Add Comment
            </Button>
          </RatingContainerInForm>
        </CommentForm>
      ) : (
        <CommentForm>
          <p>Unfortunately You have given your Comment</p>
        </CommentForm>
      )}
    </Container>
  );
};

export default CommentSection;
