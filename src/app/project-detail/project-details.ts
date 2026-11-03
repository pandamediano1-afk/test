export interface ProjectDetail {
  slug: string;
  title: string;
  client: string;
  image: string;
  imageAlt: string;
  detailsAvailable: boolean;
  clientLabel?: string;
  channel?: string;
  channelUrl?: string;
  category?: string;
  timeline?: string;
  role?: string;
  overview?: string;
  goals: string[];
  strategy: { title: string; description: string }[];
  results: { value: string; label: string }[];
  resultsNote?: string;
  contributions: string[];
  shortDescription?: string;
}

export const projectDetails: Record<string, ProjectDetail> = {
  ouyang: {
    slug: 'ouyang',
    title: 'Xây dựng kênh TikTok HotGrill tại Bắc Ninh',
    client: 'HotGrill · Bắc Ninh',
    image: '/picture/duan1.png',
    imageAlt: 'Dự án xây dựng kênh TikTok HotGrill',
    detailsAvailable: true,
    channel: '@ouyang304',
    channelUrl: 'https://www.tiktok.com/@ouyang304',
    category: 'F&B · TikTok Content · Local Marketing',
    timeline: 'Tháng/năm bắt đầu – hiện tại',
    role: 'Người xây dựng kênh / Content Creator / Social Media Manager',
    overview: 'Xây dựng kênh TikTok cho HotGrill, nhà hàng lẩu nướng tại Bắc Ninh. Kênh sử dụng nội dung tiếng Việt và tiếng Trung để giới thiệu thương hiệu, món ăn và trải nghiệm tại quán, đồng thời tạo điểm kết nối từ TikTok đến website và kênh đặt món.',
    goals: [
      'Tăng độ nhận biết của HotGrill trên TikTok và tại khu vực Bắc Ninh.',
      'Giới thiệu món ăn, không gian và trải nghiệm tại nhà hàng.',
      'Tạo nội dung phù hợp với cả khán giả Việt Nam và cộng đồng nói tiếng Trung.',
      'Dẫn người xem đến website hoặc kênh đặt món của thương hiệu.'
    ],
    strategy: [
      { title: 'Ẩm thực và trải nghiệm tại quán', description: 'Lẩu, nướng, hải sản và các món đặc trưng được kể qua trải nghiệm thực tế.' },
      { title: 'Câu chuyện kinh doanh', description: 'Chia sẻ hành trình vận hành và phát triển nhà hàng.' },
      { title: 'Thay đổi không gian', description: 'Ghi lại quá trình cải tạo quán, sắp xếp khu vực ăn uống và làm mới điểm check-in.' },
      { title: 'Nội dung địa phương', description: 'Kết nối Bắc Ninh, khách hàng và trải nghiệm ăn uống trong khu vực.' },
      { title: 'Nội dung song ngữ', description: 'Kết hợp tiếng Việt và tiếng Trung trong mô tả để tiếp cận nhiều nhóm khán giả.' }
    ],
    results: [
      { value: '64,8 nghìn', label: 'Follower' },
      { value: '169,9 nghìn', label: 'Lượt thích' },
      { value: '~1,64 triệu', label: 'Lượt xem của 3 video ghim' }
    ],
    resultsNote: 'Ba video được ghim lần lượt có khoảng 450 nghìn, 480 nghìn và 710,8 nghìn lượt xem. Hồ sơ có liên kết website và lời kêu gọi đặt món, kết nối nội dung TikTok với hoạt động kinh doanh. Số liệu được ghi nhận theo thông tin công khai trên hồ sơ tại thời điểm kiểm tra.',
    contributions: [
      'Xây dựng định hướng và các nhóm nội dung cho kênh.',
      'Lên ý tưởng và viết kịch bản video.',
      'Quay, dựng và biên tập nội dung.',
      'Viết mô tả, hashtag và nội dung song ngữ.',
      'Đăng tải và theo dõi hiệu quả video.',
      'Tối ưu hồ sơ, lời kêu gọi hành động và liên kết đặt món.'
    ],
    shortDescription: 'Tôi xây dựng kênh TikTok cho HotGrill tại Bắc Ninh, phát triển nội dung song ngữ Việt–Trung xoay quanh ẩm thực, trải nghiệm tại nhà hàng và câu chuyện thương hiệu. Kênh hiện có khoảng 64,8 nghìn follower và 169,9 nghìn lượt thích. Ba video được ghim đạt tổng cộng khoảng 1,64 triệu lượt xem, góp phần đưa hình ảnh HotGrill đến với cộng đồng người xem trên TikTok.'
  },
  'panda-media': {
    slug: 'panda-media',
    title: 'Phát triển kênh TikTok Panda Media',
    client: 'Panda Media · 2024',
    image: '/picture/duan2.png',
    imageAlt: 'Ảnh bìa dự án Panda Media',
    detailsAvailable: true,
    channel: '@pandamedia.official',
    channelUrl: 'https://www.tiktok.com/@pandamedia.official',
    category: 'Truyền thông · Livestream · Creator recruitment',
    timeline: '[Tháng/năm bắt đầu – tháng/năm kết thúc hoặc hiện tại]',
    role: '[Vai trò của bạn trong dự án]',
    overview: 'Phát triển kênh TikTok Panda Media với nội dung xoay quanh ngành idol livestream. Kênh kết hợp video giải thích về nghề livestream, nội dung review idol theo chuỗi và thông tin tuyển dụng tại Bắc Ninh.',
    goals: [
      'Tăng nhận diện Panda Media trên TikTok.',
      'Giúp người xem hiểu hơn về nghề idol livestream và hoạt động livestream.',
      'Xây dựng nội dung có khả năng thu hút người quan tâm đến ngành.',
      'Tạo điểm chạm để ứng viên tiềm năng tìm hiểu cơ hội làm việc tại Panda Media.'
    ],
    strategy: [
      { title: 'Giải thích về ngành', description: 'Giải thích idol livestream là gì, công việc cần kỹ năng nào, thuật toán và PK hoạt động ra sao.' },
      { title: 'Review idol theo chuỗi', description: 'Phát triển format “mỗi ngày review một idol live” thành chuỗi nội dung có thể tiếp tục qua nhiều tập.' },
      { title: 'Giải đáp và chia sẻ góc nhìn', description: 'Nói về thu nhập, quà tặng, hành vi người xem và tương tác giữa idol với fan.' },
      { title: 'Thương hiệu tuyển dụng', description: 'Giới thiệu Panda Media là công ty livestream tại Bắc Ninh đang tuyển idol live, có hỗ trợ thiết bị và chỗ ở.' }
    ],
    results: [
      { value: '2.637', label: 'Follower' },
      { value: '173,5 nghìn', label: 'Lượt thích' },
      { value: '~1,96 triệu', label: 'Lượt xem của 3 video ghim' }
    ],
    resultsNote: 'Ba video ghim lần lượt đạt khoảng 232,7 nghìn, 428,1 nghìn và 1,3 triệu lượt xem. Một video trong series review idol đạt khoảng 86,2 nghìn lượt xem; video giải đáp cách idol livestream hiệu quả đạt khoảng 26 nghìn lượt xem. Số liệu được ghi nhận theo hồ sơ công khai tại thời điểm kiểm tra. Lượt xem thể hiện độ phủ video, chưa đủ để kết luận về số ứng viên, lượt đăng ký hoặc kết quả tuyển dụng.',
    contributions: [
      'Tôi phụ trách [định hướng nội dung / lên ý tưởng và viết kịch bản / quay dựng / dẫn video / đăng tải / theo dõi hiệu quả].',
      'Tôi phát triển các chủ đề về nghề idol livestream và xây dựng chuỗi review idol để duy trì định dạng nội dung nhất quán cho kênh.'
    ],
    shortDescription: 'Tôi tham gia phát triển kênh TikTok Panda Media, tập trung vào nội dung về ngành idol livestream. Kênh kết hợp các video giải thích, góc nhìn về hoạt động livestream và chuỗi review idol. Tại thời điểm ghi nhận, tài khoản có 2.637 follower, 173,5 nghìn lượt thích; ba video ghim đạt tổng cộng khoảng 1,96 triệu lượt xem.'
  },
  'hao-kinh-doanh': {
    slug: 'hao-kinh-doanh',
    title: 'Phát triển nội dung TikTok cho Hảo Kinh Doanh',
    client: 'HotGrill',
    image: '/picture/duan3.png',
    imageAlt: 'Ảnh bìa dự án Hảo Kinh Doanh',
    detailsAvailable: true,
    clientLabel: 'Thương hiệu',
    category: 'F&B · TikTok Content · Local Marketing',
    timeline: '[Tháng/năm bắt đầu – hiện tại]',
    role: '[Vai trò của bạn trong dự án]',
    overview: 'Phát triển nội dung TikTok cho kênh Hảo Kinh Doanh, tập trung giới thiệu các set lẩu, trải nghiệm ăn uống và combo lẩu camping của HotGrill. Kênh sử dụng các chủ đề gắn với F&B và Bắc Ninh, đồng thời dẫn người xem đến liên kết đặt món trên hồ sơ.',
    goals: [
      'Tăng khả năng nhận biết HotGrill trên TikTok tại Bắc Ninh.',
      'Giúp người xem hình dung các set lẩu, sản phẩm và trải nghiệm ăn uống.',
      'Tạo nội dung thu hút người đang tìm địa điểm hoặc combo ăn uống.',
      'Kết nối người xem với kênh đặt hàng của thương hiệu.'
    ],
    strategy: [
      { title: 'Giới thiệu món và combo', description: 'Tập trung vào các set lẩu, lẩu nướng và combo lẩu camping.' },
      { title: 'Giá trị bữa ăn', description: 'Khai thác câu hỏi về giá, khẩu phần và mức độ phù hợp của từng lựa chọn.' },
      { title: 'So sánh trải nghiệm', description: 'Đặt các hình thức ăn uống như buffet, gọi món và set lẩu cạnh nhau.' },
      { title: 'Video tạo tò mò', description: 'Mở đầu bằng câu hỏi và tình huống đời thường để thu hút sự chú ý.' },
      { title: 'Nội dung địa phương', description: 'Gắn bài đăng với Bắc Ninh và các hashtag F&B, food TikTok.' },
      { title: 'Kêu gọi đặt hàng', description: 'Đưa thông tin combo lẩu camping, số liên hệ và liên kết đặt đơn trên hồ sơ.' }
    ],
    results: [
      { value: '4.083', label: 'Follower' },
      { value: '95,1 nghìn', label: 'Lượt thích' },
      { value: '~1,54 triệu', label: 'Lượt xem của 3 video ghim' }
    ],
    resultsNote: 'Ba video ghim đạt khoảng 524,8 nghìn, 357,5 nghìn và 658,2 nghìn lượt xem. Một số video khác hiển thị khoảng 179,3 nghìn, 284,4 nghìn và 84,4 nghìn lượt xem. Số liệu được ghi nhận theo thông tin công khai tại thời điểm kiểm tra. Đây là số liệu lượt xem; cần TikTok Analytics hoặc dữ liệu bán hàng để xác định lượt nhấp, đơn hàng và doanh thu đến từ TikTok.',
    contributions: [
      'Tôi phụ trách [lên ý tưởng / viết kịch bản / quay dựng / đăng tải / quản lý nội dung] cho kênh Hảo Kinh Doanh.',
      'Nội dung tập trung vào sản phẩm lẩu của HotGrill, các chủ đề ăn uống tại Bắc Ninh và lời kêu gọi đặt hàng trên hồ sơ.'
    ],
    shortDescription: 'Tôi tham gia phát triển nội dung TikTok cho Hảo Kinh Doanh, kênh F&B giới thiệu các set lẩu và combo lẩu camping của HotGrill tại Bắc Ninh. Kênh hiện có 4.083 follower và 95,1 nghìn lượt thích. Ba video được ghim đạt tổng cộng khoảng 1,54 triệu lượt xem; hồ sơ cũng kết nối người xem đến kênh đặt hàng của thương hiệu.'
  }
};
