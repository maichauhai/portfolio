const solutions = {
  fnb: {
    mockTitle: "F&B POS Dashboard",
    image: "assets/mockup-fnb-pos.png",
    imageAlt: "Mockup F&B POS dashboard",
    title: "Quán F&B của bạn sẽ có:",
    price: "Linh hoạt theo quy mô - ưu tiên tiết kiệm thời gian, giảm lỗi và nhìn rõ dòng tiền",
    cta: "Tư vấn cho quán của tôi",
    accent: "#059669",
    features: [
      "POS chạy trên điện thoại, tablet hoặc máy tính",
      "Báo cáo doanh thu, dòng tiền, lương và kho",
      "Ghi chú vận hành đồng bộ giữa các thiết bị",
      "Lịch content và auto-post fanpage",
      "Dashboard chủ quán xem nhanh mỗi ngày",
      "Backup và monitoring để giảm lỗi lặp lại"
    ]
  },
  retail: {
    mockTitle: "Retail Sales System",
    image: "assets/mockup-retailhub.png",
    imageAlt: "Mockup RetailHub dashboard",
    title: "Shop retail của bạn sẽ có:",
    price: "Linh hoạt theo số sản phẩm - tối ưu tốc độ bán hàng và chi phí vận hành",
    cta: "Tư vấn cho shop của tôi",
    accent: "#0ea5e9",
    features: [
      "Landing page bán hàng rõ sản phẩm",
      "Quản lý đơn, tồn kho và khách hàng",
      "Form đặt hàng kết nối Google Sheet hoặc CRM",
      "Chatbot hỗ trợ câu hỏi thường gặp",
      "Dashboard theo dõi doanh thu",
      "Tối ưu hiển thị trên điện thoại"
    ]
  },
  service: {
    mockTitle: "Service Booking Flow",
    image: "assets/mockup-service.png",
    imageAlt: "Mockup service booking CRM dashboard",
    title: "Dịch vụ của bạn sẽ có:",
    price: "Tùy theo quy trình tư vấn/đặt lịch - tối ưu phản hồi, chăm sóc và chi phí nhân sự",
    cta: "Tư vấn cho dịch vụ của tôi",
    accent: "#7c3aed",
    features: [
      "Trang giới thiệu dịch vụ chuyên nghiệp",
      "Form tư vấn và đặt lịch",
      "Nhắc lịch tự động",
      "CRM mini lưu khách hàng",
      "Theo dõi trạng thái từng lead",
      "Báo cáo việc cần xử lý mỗi ngày"
    ]
  },
  content: {
    mockTitle: "Content Calendar",
    image: "assets/mockup-content.png",
    imageAlt: "Mockup content calendar dashboard",
    title: "Đội content của bạn sẽ có:",
    price: "Tùy theo số kênh và lịch đăng - tối ưu thời gian vận hành trên mỗi bài",
    cta: "Tư vấn workflow content",
    accent: "#f59e0b",
    features: [
      "Lịch bài trực quan theo tuần",
      "Duyệt caption và ảnh trước khi đăng",
      "Nạp nội dung từ Google Sheet",
      "n8n đăng bài theo lịch",
      "Theo dõi bài trễ, bài lỗi, bài đã đăng",
      "Lưu lại lịch sử để tối ưu nội dung"
    ]
  },
  freelancer: {
    mockTitle: "Freelancer Portfolio",
    image: "assets/mockup-freelance.png",
    imageAlt: "Mockup freelancer portfolio builder dashboard",
    title: "Portfolio cá nhân của bạn sẽ có:",
    price: "Linh hoạt theo mục tiêu cá nhân - tối ưu hình ảnh chuyên nghiệp trên chi phí triển khai",
    cta: "Tư vấn portfolio của tôi",
    accent: "#059669",
    features: [
      "Trang giới thiệu rõ bạn giúp ai",
      "Case study dễ hiểu cho khách không rành kỹ thuật",
      "Form liên hệ hoặc Zalo trực tiếp",
      "Ảnh dự án thật thay vì mockup chung chung",
      "SEO và chia sẻ link đẹp",
      "Có thể mở rộng thành blog hoặc landing sau này"
    ]
  }
};

const caseStudies = {
  monstea: {
    kicker: "F&B Management System",
    title: "Monstea POS",
    summary: "Một quán nhỏ cần bán nhanh, ghi nhận chi phí, theo dõi kho và biết cuối tháng còn bao nhiêu tiền. Hệ thống gom các thao tác đó vào một màn hình chủ quán có thể dùng mỗi ngày.",
    flow: [
      "Nhân viên bán hàng và chấm công trên thiết bị tại quán.",
      "Chủ quán xem doanh thu, ghi chú vận hành, chi phí, lương và dòng tiền.",
      "Dữ liệu đồng bộ realtime để máy chủ quán và điện thoại không lệch nhau.",
      "Dashboard cảnh báo việc cần xử lý như ghi chú mở, task quá hạn hoặc doanh thu bất thường."
    ],
    outcome: [
      "Giảm nhập liệu thủ công.",
      "Biết tiền vào, tiền chi, lương phải trả và tồn kho nhanh hơn.",
      "Có dữ liệu thật để quyết định món bán, nhập hàng và lịch nhân sự.",
      "Chạy được như một app nội bộ, không phụ thuộc phần mềm thuê theo tháng."
    ],
    note: "Case study này chỉ mô tả luồng vận hành ở mức chủ doanh nghiệp cần hiểu. Chi tiết database, API và cách đồng bộ được giữ riêng khi triển khai."
  },
  zaklife: {
    kicker: "Personal Command Center",
    title: "ZakLife",
    summary: "ZakLife là bảng điều khiển cá nhân để gom việc vận hành Monstea, lịch content, thói quen, task, kho link/lệnh và automation monitoring vào một nơi.",
    flow: [
      "Dashboard đọc dữ liệu từ POS, content calendar, task, journal và habit.",
      "Insight Engine tạo tín hiệu: việc quá hạn, ghi chú mở, content thiếu, habit tới chu kỳ.",
      "Quick Dock lưu link, lệnh và ghi chú hay dùng để giảm thời gian tìm kiếm.",
      "Automation Monitoring theo dõi workflow n8n, backup và trạng thái đăng bài."
    ],
    outcome: [
      "Ít phải mở nhiều tab rời rạc.",
      "Biết hôm nay cần xử lý gì trước.",
      "Các thói quen và task không bị rơi mất sau vài ngày.",
      "Có nền để thêm agent tự động về sau."
    ],
    note: "Mục tiêu không phải làm app ghi chú đẹp, mà là một bảng điều khiển giúp người bận giữ nhịp công việc mỗi ngày."
  },
  content: {
    kicker: "Content Automation",
    title: "Content Auto-Post",
    summary: "Luồng content giúp tạo bài ở Google Sheet hoặc ZakLife, duyệt trên lịch, sau đó n8n tự đăng fanpage đúng giờ và báo trạng thái về dashboard.",
    flow: [
      "Agent hoặc người dùng tạo draft nội dung.",
      "Draft được đẩy vào lịch Content để kiểm tra caption, ảnh, giờ đăng và trạng thái.",
      "n8n chỉ đăng các bài đã được duyệt và tới giờ.",
      "Sau khi đăng, hệ thống cập nhật trạng thái để chủ quán biết bài nào đã chạy, bài nào bị trễ."
    ],
    outcome: [
      "Không phải copy caption thủ công mỗi ngày.",
      "Vẫn có bước duyệt để giữ chất lượng nội dung.",
      "Có thể mở rộng sang Reels, nhạc, ảnh từ Drive và lịch khuyến mãi.",
      "Giảm rủi ro workflow chạy nhưng không ai biết nó đã lỗi."
    ],
    note: "Luồng này được thiết kế theo nguyên tắc: automation không thay người duyệt chất lượng, nó chỉ lấy phần lặp lại ra khỏi tay người vận hành."
  },
  rental: {
    kicker: "Rental Property Platform",
    title: "Rental Home System",
    summary: "Một nền tảng cho thuê nhà cần giúp khách tìm căn phù hợp thật nhanh, để lại nhu cầu dễ dàng, còn đội vận hành thì nhìn được trạng thái nhà, lead và doanh thu ở một nơi.",
    flow: [
      "Phase 1: MVP gồm bản đồ, danh sách nhà, chi tiết căn, form khách quan tâm và dashboard lead cơ bản.",
      "Phase 2: Mở rộng dashboard admin để quản lý nhà, trạng thái, lead, phân quyền và báo cáo vận hành.",
      "Phase 3: Thêm tài khoản khách thuê và các yêu cầu dịch vụ sau khi đã thuê.",
      "Phase 4: Bổ sung thanh toán, hợp đồng PDF và xác nhận tự động.",
      "Phase 5: Dùng dữ liệu thật để nâng cấp AI, báo cáo sâu và tối ưu marketing."
    ],
    outcome: [
      "Khách xem nhà theo bản đồ và lọc nhanh thay vì hỏi thủ công từng căn.",
      "Mỗi căn có trang chi tiết rõ ràng, form quan tâm và dữ liệu lead đi về dashboard.",
      "Chủ/đội vận hành biết căn nào trống, căn nào đã thuê, lead nào cần xử lý.",
      "Có lộ trình mở rộng rõ, không phải build tất cả ngay từ đầu."
    ],
    note: "Case này ưu tiên tư duy triển khai theo giai đoạn: ra bản dùng được trước, đo dữ liệu thật, rồi mới mở rộng payment, hợp đồng và AI nâng cao."
  }
};

function setSolution(key) {
  const data = solutions[key] || solutions.fnb;
  document.querySelectorAll("[data-solution-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.solutionTab === key);
  });
  const mockTitle = document.querySelector("[data-mock-title]");
  const solTitle = document.querySelector("[data-solution-title]");
  const solPrice = document.querySelector("[data-solution-price]");
  const solCta = document.querySelector("[data-solution-cta]");
  const list = document.querySelector("[data-solution-features]");
  const screen = document.querySelector("[data-mock-screen]");
  const image = document.querySelector("[data-mock-image]");
  if (!mockTitle || !solTitle || !solPrice || !solCta || !list || !screen || !image) return;
  mockTitle.textContent = data.mockTitle;
  solTitle.textContent = data.title;
  solPrice.textContent = data.price;
  solCta.textContent = data.cta;
  list.innerHTML = data.features.map((item) => `<li>${item}</li>`).join("");
  screen.dataset.mockType = key;
  image.src = data.image;
  image.alt = data.imageAlt || data.mockTitle;
  screen.style.setProperty("--mock-accent", data.accent);
}

function animateCounter(element) {
  if (element.dataset.done) return;
  element.dataset.done = "1";
  const target = Number(element.dataset.counter || 0);
  const suffix = element.dataset.suffix || "";
  const duration = 1100;
  const startTime = performance.now();
  const step = (now) => {
    const progress = Math.min(1, (now - startTime) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = `${Math.round(target * eased)}${suffix}`;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initReveal() {
  const revealNow = (item) => {
    item.classList.add("visible");
    item.querySelectorAll("[data-counter]").forEach(animateCounter);
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      revealNow(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16 });
  document.querySelectorAll(".reveal").forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) revealNow(item);
    else observer.observe(item);
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      document.querySelector("[data-menu]")?.classList.remove("open");
    });
  });
}

function initMobileMenu() {
  const button = document.querySelector("[data-menu-btn]");
  const menu = document.querySelector("[data-menu]");
  button?.addEventListener("click", () => menu?.classList.toggle("open"));
}

function openCaseStudy(key) {
  const data = caseStudies[key];
  const modal = document.getElementById("caseModal");
  if (!data || !modal) return;
  document.getElementById("caseModalKicker").textContent = data.kicker;
  document.getElementById("caseModalTitle").textContent = data.title;
  document.getElementById("caseModalSummary").textContent = data.summary;
  document.getElementById("caseModalFlow").innerHTML = data.flow.map((item) => `<li>${item}</li>`).join("");
  document.getElementById("caseModalOutcome").innerHTML = data.outcome.map((item) => `<li>${item}</li>`).join("");
  document.getElementById("caseModalNote").textContent = data.note;
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeCaseStudy() {
  const modal = document.getElementById("caseModal");
  modal?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function initCaseStudyModal() {
  document.querySelectorAll("[data-case-open]").forEach((button) => {
    button.addEventListener("click", () => openCaseStudy(button.dataset.caseOpen));
  });
  document.querySelectorAll("[data-case-close]").forEach((button) => {
    button.addEventListener("click", closeCaseStudy);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeCaseStudy();
  });
}

function initProjectCarousels() {
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const image = carousel.querySelector("[data-carousel-image]");
    const prev = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    const dots = carousel.querySelector("[data-carousel-dots]");
    const images = (carousel.dataset.images || "").split("|").filter(Boolean);
    const alts = (carousel.dataset.alts || "").split("|");
    let index = 0;

    const render = () => {
      if (!image || !images.length) return;
      image.src = images[index];
      image.alt = alts[index] || "";
      if (dots) {
        dots.innerHTML = images
          .map((_, dotIndex) => `<span class="${dotIndex === index ? "active" : ""}"></span>`)
          .join("");
      }
    };

    prev?.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      render();
    });
    next?.addEventListener("click", () => {
      index = (index + 1) % images.length;
      render();
    });
    render();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setSolution("fnb");
  initReveal();
  initSmoothScroll();
  initMobileMenu();
  initCaseStudyModal();
  initProjectCarousels();

  document.querySelectorAll("[data-solution-tab]").forEach((button) => {
    button.addEventListener("click", () => setSolution(button.dataset.solutionTab));
  });
});
