const getStoredCourseApplication = () => {
    const storedCourseApplication = localStorage.getItem('course-applications');
    if (storedCourseApplication) {
        return JSON.parse(storedCourseApplication);
    }
    return [];
}

const saveCourseApplication = (id) => {
    const storedCourseApplications = getStoredCourseApplication();
    const exists = storedCourseApplications.find((courseId) => courseId === id);

    if (!exists) {
        storedCourseApplications.push(id);
        localStorage.setItem('course-applications', JSON.stringify(storedCourseApplications));
    }
}

export { saveCourseApplication, getStoredCourseApplication };
