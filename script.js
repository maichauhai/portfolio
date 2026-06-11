const solutions = {
  fnb: {
    mockTitle: "F&B POS Dashboard",
    title: "Quán F&B của bạn sẽ có:",
    price: "Từ 8 triệu - hoàn thành trong 2 tuần",
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
    title: "Shop retail của bạn sẽ có:",
    price: "Từ 6 triệu - hoàn thành trong 1-2 tuần",
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
    title: "Dịch vụ của bạn sẽ có:",
    price: "Từ 10 triệu - hoàn thành trong 2 tuần",
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
    title: "Đội content của bạn sẽ có:",
    price: "Từ 5 triệu - hoàn thành trong 1 tuần",
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
    title: "Portfolio cá nhân của bạn sẽ có:",
    price: "Từ 3 triệu - hoàn thành trong 1 tuần",
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
  if (!mockTitle || !solTitle || !solPrice || !solCta || !list || !screen) return;
  mockTitle.textContent = data.mockTitle;
  solTitle.textContent = data.title;
  solPrice.textContent = data.price;
  solCta.textContent = data.cta;
  list.innerHTML = data.features.map((item) => `<li>${item}</li>`).join("");
  screen.style.background = `linear-gradient(135deg, #10151f, ${data.accent}33 58%, #182337)`;
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

document.addEventListener("DOMContentLoaded", () => {
  setSolution("fnb");
  initReveal();
  initSmoothScroll();
  initMobileMenu();
  initCaseStudyModal();

  document.querySelectorAll("[data-solution-tab]").forEach((button) => {
    button.addEventListener("click", () => setSolution(button.dataset.solutionTab));
  });
});
