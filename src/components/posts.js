import Post from "./Post";


export default function Posts() {
    return (
      <div className="posts">
        {postData.map((array, index) => (
          <Post
            postUserName={array.userName}
            postUserProfilePicture={array.userProfilePicture}
            postImage={array.postImage}
            likes={array.likeNumber}
            key={index}
          />
        ))}
      </div>
    );
  }
  
const postData = [
  {
    userName: "meowed",
    userProfilePicture: "assets/img/profiles/meowed.svg",
    postImage: "assets/img/gato-telefone.svg",
    likeNumber: 75,
  },

  {
    userName: "barked",
    userProfilePicture: "assets/img/profiles/barked.svg",
    postImage: "assets/img/dog.svg",
    likeNumber: 733,
  },

  {
    userName: "smallcutecats",
    userProfilePicture: "assets/img/smallcutecats.svg",
    postImage: "",
    likeNumber: 4517,
  },
];