export default function handler(req, res) {
  const data = [
    {
      id: 1,
      name: "John Doe",
      image: "/assets/images/user1.png",
      designation: "CEO",
      linkedin: "https://www.linkedin.com/in/john-doe-1b9b711a3/",
      twitter: "https://twitter.com/john_doe",
      insta: "https://www.instagram.com/john_doe/",
    },
    {
      id: 2,
      name: "Jane Doe",
      image: "/assets/images/user2.png",
      designation: "COO",
      linkedin: "https://www.linkedin.com/in/jane-doe-1b9b711a3/",
      twitter: "https://twitter.com/jane_doe",
      insta: "https://www.instagram.com/jane_doe/",
    },
    {
      id: 3,
      name: "Jack Doe",
      image: "/assets/images/user3.png",
      designation: "CTO",
      linkedin: "https://www.linkedin.com/in/jack-doe-1b9b711a3/",
      twitter: "https://twitter.com/jack_doe",
      insta: "https://www.instagram.com/jack_doe/",
    },
    {
      id: 4,
      name: "Jill Doe",
      image: "/assets/images/user4.png",
      designation: "CMO",
      linkedin: "https://www.linkedin.com/in/jill-doe-1b9b711a3/",
      twitter: "https://twitter.com/jill_doe",
      insta: "https://www.instagram.com/jill_doe/",
    },
    {
      id: 5,

      name: "Joe Doe",
      image: "/assets/images/user5.png",
      designation: "CFO",
      linkedin: "https://www.linkedin.com/in/joe-doe-1b9b711a3/",
      twitter: "https://twitter.com/joe_doe",
      insta: "https://www.instagram.com/joe_doe/",
    },
    {
      id: 6,
      name: "Jenny Doe",
      image: "/assets/images/user6.png",
      designation: "CMO",
      linkedin: "https://www.linkedin.com/in/jenny-doe-1b9b711a3/",
      twitter: "https://twitter.com/jenny_doe",
      insta: "https://www.instagram.com/jenny_doe/",
    },
    {
      id: 7,
      name: "John Doe",
      image: "/assets/images/user7.png",
      designation: "CEO",
      linkedin: "https://www.linkedin.com/in/john-doe-1b9b711a3/",
      twitter: "https://twitter.com/john_doe",
      insta: "https://www.instagram.com/john_doe/",
    },
  ];
  res.status(200).json(data);
}
