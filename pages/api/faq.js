export default function handler(req, res) {
  const data = [
    {
      id: 1,
      title: "What is the total supply?",
      desc: "Velit dignissim ut volutpat pellentesque eget ultrices nulla. Vitae mauris luctus pulvinar non quis sed ipsum nam. Urna pharetra ullamcorper enim, mi vel. Neque purus enim, sed nibh morbi vitae augue ut. Dolor, massa, nec vel, enim id et at nec amet.",
    },
    {
      id: 2,
      title: "Ac rhoncus, aliquet amet vel?",
      desc: "Velit dignissim ut volutpat pellentesque eget ultrices nulla. Vitae mauris luctus pulvinar non quis sed ipsum nam. Urna pharetra ullamcorper enim, mi vel. Neque purus enim, sed nibh morbi vitae augue ut. Dolor, massa, nec vel, enim id et at nec amet.",
    },
    {
      id: 3,
      title: "Nunc fermentum scelerisque semper quisque?",
      desc: "Velit dignissim ut volutpat pellentesque eget ultrices nulla. Vitae mauris luctus pulvinar non quis sed ipsum nam. Urna pharetra ullamcorper enim, mi vel. Neque purus enim, sed nibh morbi vitae augue ut. Dolor, massa, nec vel, enim id et at nec amet.",
    },
    {
      id: 4,
      title: "In interdum urna sagittis sodales?",
      desc: "Velit dignissim ut volutpat pellentesque eget ultrices nulla. Vitae mauris luctus pulvinar non quis sed ipsum nam. Urna pharetra ullamcorper enim, mi vel. Neque purus enim, sed nibh morbi vitae augue ut. Dolor, massa, nec vel, enim id et at nec amet.",
    },
    {
      id: 5,
      title: "Eget ipsum pellentesque purus natoque?",
      desc: "Velit dignissim ut volutpat pellentesque eget ultrices nulla. Vitae mauris luctus pulvinar non quis sed ipsum nam. Urna pharetra ullamcorper enim, mi vel. Neque purus enim, sed nibh morbi vitae augue ut. Dolor, massa, nec vel, enim id et at nec amet.",
    },
    {
      id: 6,
      title: "Cras ac, gravida diam velit?",
      desc: "Velit dignissim ut volutpat pellentesque eget ultrices nulla. Vitae mauris luctus pulvinar non quis sed ipsum nam. Urna pharetra ullamcorper enim, mi vel. Neque purus enim, sed nibh morbi vitae augue ut. Dolor, massa, nec vel, enim id et at nec amet.",
    },
  ];
  res.status(200).json(data);
}
