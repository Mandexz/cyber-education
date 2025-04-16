// بيانات نموذجية للدورات (يمكن استبدالها بطلب API)
const courses = [
    {
        id: 1,
        title: "أساسيات الأمن السيبراني",
        description: "تعلم المفاهيم الأساسية لحماية الأنظمة والشبكات",
        price: 99,
        image: "assets/images/cyber-basics.jpg"
    },
    {
        id: 2,
        title: "اختبار الاختراق الأخلاقي",
        description: "تعلم كيفية اكتشاف الثغرات الأمنية",
        price: 149,
        image: "assets/images/penetration-testing.jpg"
    }
];

function renderCourses() {
    const container = document.getElementById('courseContainer');
    
    courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <img src="${course.image}" alt="${course.title}">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <div class="price">$${course.price}</div>
            <button onclick="enrollCourse(${course.id})">سجل الآن</button>
        `;
        container.appendChild(card);
    });
}

function enrollCourse(courseId) {
    // يمكن ربط هذا بواجهة الدفع لاحقاً
    window.location.href = `checkout/index.html?course=${courseId}`;
}

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', renderCourses);
