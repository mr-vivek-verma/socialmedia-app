import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blueGrey} from '@mui/material/colors';
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import DeleteArticle from "./DeleteArticle";
import { onAuthStateChanged, auth } from "../firebase";

import EditArticle from "./EditArticle";


const Home = () => {
  const [articles, setArticles] = useState([]);
  
  const [user, setUser] = useState({});
  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    
    const articleRef = collection(db, "Articles");
    const q = query(articleRef);
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles)
    });
    
  }, []);

  return (
    <div>
    {!user ? (<h1>articles not found</h1>) : (<>
      {articles.length === 0 ? (
    <p>No article found</p>
  ) : (
    articles.map(({ id, title, description, imageUrl }) => (
    <Card sx={{ height:"auto", width:"50%", ml:43 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blueGrey[500] }} aria-label="title">
            V
          </Avatar>
          
        }
        
        action={
          <IconButton>
           <DeleteArticle id={id} imageUrl={imageUrl}/>
           
           <EditArticle id={id}/>
              
          </IconButton>
          
        }
        
        title={title}
        subheader="September 14, 2016"
      />
     
      <img style={{height:"300px"}}
      src={imageUrl} alt={id}/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
      </Card>
  )))
     
      }</>)}
    </div>)
}

export default Home