import Button from '@material-ui/core/Button'
import React, { useState } from 'react';

import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';import ShareIcon from '@material-ui/icons/Share';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CommentIcon from '@material-ui/icons/Comment';
import { useHistory } from 'react-router'

const PostCard = (props) => {
  const history = useHistory();

  const handleGoToPostDetail = () => {
    history.push(`/post/${props.post.id}`);
  }

  const handleUpVote = () => {
    props.handleVotePost(props.post.id, 1)
  }

  const handleDownVote = () => {
    props.handleVotePost(props.post.id, -1)
  }

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar>
            R
          </Avatar>
        }
        title={props.post.title}
        subheader={props.post.username}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.post.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleUpVote}>
          <ArrowUpwardIcon color={props.post.userVoteDirection === 1 ? "primary" : "disabled"} />
        </IconButton>
        <IconButton onClick={handleDownVote}>
          <ArrowDownwardIcon color={props.post.userVoteDirection === -1 ? "secondary" : "disabled"}/>
        </IconButton>
        <span>{props.post.votesCount}</span>
        {!props.hideComment && (
          <Button
            variant="contained"
            onClick={handleGoToPostDetail}
            startIcon={<CommentIcon />}
          >
            Comentar
          </Button>)}

      </CardActions>
    </Card>
  )
}

export default PostCard;
