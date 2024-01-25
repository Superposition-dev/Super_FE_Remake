export const getExhibitionList = async () => {
  try {
    const res = {
      data: [
        {
          exbihitionNum: 1,
          title: '여기는 따뜻해',
          subtitle: '성수지명 X SuperPosition 겨울 전시',
          picture: '',
          location: '성수지앵',
          startDate: '2023.12.16',
          endDate: '2024.01.24',
          isDisplay: true,
        },
        {
          exbihitionNum: 2,
          title: '여기는 따뜻해',
          subtitle: '성수지명 X SuperPosition 겨울 전시',
          picture: '',
          location: '성수지앵',
          startDate: '2023.12.16',
          endDate: '2024.01.24',
          isDisplay: false,
        },
        {
          exbihitionNum: 3,
          title: '여기는 따뜻해',
          subtitle: '성수지명 X SuperPosition 겨울 전시',
          picture: '',
          location: '성수지앵',
          startDate: '2023.12.16',
          endDate: '2024.01.24',
          isDisplay: false,
        },
      ],
    };
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
