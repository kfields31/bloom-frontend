import { PROGRESS_STATUS } from '@/lib/constants/enums';
import { Course } from '@/lib/store/coursesSlice';

export const determineCourseProgress = (courses: Course[], courseId: number) => {
  const userCourse = courses.find((course: Course) => course.storyblokId === courseId);

  let progress = PROGRESS_STATUS.NOT_STARTED;

  if (userCourse) {
    progress = userCourse.completed ? PROGRESS_STATUS.COMPLETED : PROGRESS_STATUS.STARTED;
  }
  return progress;
};
