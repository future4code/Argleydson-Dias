import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const CommentListItem = (props) => {

  const handleUpVote = () => {
    if(props.comment.userVoteDirection === 1){
      props.handleCommentVote(props.comment.id, 0)
    } else {
      props.handleCommentVote(props.comment.id, 1)
    }
  }

  const handleDownVote = () => {
    if(props.comment.userVoteDirection === -1){
      props.handleCommentVote(props.comment.id, 0)
    } else {
      props.handleCommentVote(props.comment.id, -1)
    }
  }

  return (
    <ListItem>
      <ListItemText
        primary={props.comment.username}
        secondary={props.comment.text}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={handleUpVote}>
          <ArrowUpwardIcon color={props.comment.userVoteDirection === 1 ? "primary" : "disabled"} />
        </IconButton>
        <span>{props.comment.votesCount}</span>
        <IconButton edge="end" onClick={handleDownVote}>
          <ArrowDownwardIcon color={props.comment.userVoteDirection === -1 ? "secondary" : "disabled"}/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default CommentListItem;
