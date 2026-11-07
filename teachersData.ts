import { TeacherTimetableDoc } from './types';

const PERIOD_TIMES = [
  { start: "08:00", end: "08:40" },
  { start: "08:45", end: "09:25" },
  { start: "09:30", end: "10:10" },
  { start: "10:15", end: "10:55" },
  { start: "11:00", end: "11:40" },
  { start: "11:45", end: "12:25" },
  { start: "14:00", end: "14:45" },
];

interface Cell {
  cls: string;
  sub: string;
}

function makeSlots(lessons: (Cell | null)[], defaultSubject: string) {
  return lessons.map((item, idx) => {
    const time = PERIOD_TIMES[idx] || { start: "12:30", end: "13:10" };
    if (!item) {
      return {
        id: `slot_${idx}_${Math.random().toString(36).substring(2, 7)}`,
        lessonNumber: idx + 1,
        startTime: time.start,
        endTime: time.end,
        className: "بێ وانە",
        subject: defaultSubject,
        isExam: false,
      };
    }
    return {
      id: `slot_${idx}_${Math.random().toString(36).substring(2, 7)}`,
      lessonNumber: idx + 1,
      startTime: time.start,
      endTime: time.end,
      className: item.cls,
      subject: item.sub || defaultSubject,
      isExam: false,
    };
  });
}

function makeDay(dayName: string, lessons: (Cell | null)[], defaultSubject: string) {
  return {
    dayName,
    shift: 'morning' as const,
    slots: makeSlots(lessons, defaultSubject),
  };
}

export const KANI_ZARK_TEACHERS: TeacherTimetableDoc[] = [
  // 1. شنکل (Shankal) - بیرکاری
  {
    id: "teacher_shankal",
    teacherName: "م. شنکل",
    subject: "بیرکاری",
    lessonCountPerDay: 7,
    notes: "مامۆستای بیرکاری - قوتابخانا کانی زەرک",
    updatedAt: new Date().toISOString(),
    schedule: {
      "ئێکشەمبی": makeDay("ئێکشەمبی", [
        { cls: "پۆلا 9", sub: "بیرکاری" },
        null, null, null, null, null, null
      ], "بیرکاری"),
      "دووشەمبی": makeDay("دووشەمبی", [
        null, null,
        { cls: "پۆلا 9", sub: "بیرکاری" },
        null, null, null, null
      ], "بیرکاری"),
      "سێشەمبی": makeDay("سێشەمبی", [
        null,
        { cls: "پۆلا 9", sub: "بیرکاری" },
        null, null, null, null, null
      ], "بیرکاری"),
      "چوارشەمبی": makeDay("چوارشەمبی", [
        null,
        { cls: "پۆلا 9", sub: "بیرکاری" },
        null, null, null, null, null
      ], "بیرکاری"),
      "پێنچ شەمبی": makeDay("پێنچ شەمبی", [
        { cls: "پۆلا 9", sub: "بیرکاری" },
        null, null, null, null, null, null
      ], "بیرکاری"),
    }
  },

  // 2. امیر (Amir) - عەرەبی، کۆمپیوتەر، ئایین
  {
    id: "teacher_amir",
    teacherName: "م. امیر",
    subject: "عەرەبی و تەکنەلۆجیا",
    lessonCountPerDay: 7,
    notes: "مامۆستای عەرەبی، کۆمپیوتەر و ئایین - قوتابخانا کانی زەرک",
    updatedAt: new Date().toISOString(),
    schedule: {
      "ئێکشەمبی": makeDay("ئێکشەمبی", [
        null, null,
        { cls: "پۆلا 9", sub: "عەرەبی" },
        { cls: "پۆلا 7", sub: "عەرەبی" },
        { cls: "پۆلا 9", sub: "ئایین" },
        { cls: "پۆلا 8", sub: "عەرەبی" },
        null
      ], "عەرەبی"),
      "دووشەمبی": makeDay("دووشەمبی", [
        null, null,
        { cls: "پۆلا 8", sub: "کۆمپیوتەر" },
        { cls: "پۆلا 7", sub: "کۆمپیوتەر" },
        { cls: "پۆلا 9", sub: "ئایین" },
        { cls: "پۆلا 7", sub: "عەرەبی" },
        null
      ], "عەرەبی"),
      "سێشەمبی": makeDay("سێشەمبی", [
        null, null,
        { cls: "پۆلا 7", sub: "عەرەبی" },
        { cls: "پۆلا 6 - أ", sub: "عەرەبی" },
        null,
        { cls: "پۆلا 8", sub: "عەرەبی" },
        null
      ], "عەرەبی"),
      "چوارشەمبی": makeDay("چوارشەمبی", [
        null, null,
        { cls: "پۆلا 8", sub: "عەرەبی" },
        { cls: "پۆلا 9", sub: "عەرەبی" },
        { cls: "پۆلا 7", sub: "کۆمپیوتەر" },
        { cls: "پۆلا 6 - أ", sub: "عەرەبی" },
        null
      ], "عەرەبی"),
      "پێنچ شەمبی": makeDay("پێنچ شەمبی", [
        null,
        { cls: "پۆلا 8", sub: "کۆمپیوتەر" },
        { cls: "پۆلا 8", sub: "ئایین" },
        null,
        { cls: "پۆلا 6 - أ", sub: "عەرەبی" },
        { cls: "پۆلا 9", sub: "عەرەبی" },
        null
      ], "عەرەبی"),
    }
  },

  // 3. زيتون زيتون (Zaytoon Zaytoon) - زانست و ئایین
  {
    id: "teacher_zaytoon",
    teacherName: "م. زیتون زیتون",
    subject: "زانست",
    lessonCountPerDay: 7,
    notes: "مامۆستای زانست و ئایین - قوتابخانا کانی زەرک",
    updatedAt: new Date().toISOString(),
    schedule: {
      "ئێکشەمبی": makeDay("ئێکشەمبی", [
        null,
        { cls: "پۆلا 7", sub: "زانست" },
        { cls: "پۆلا 8", sub: "زانست" },
        { cls: "پۆلا 9", sub: "زانست" },
        { cls: "پۆلا 3 - أ", sub: "ئایین" },
        null, null
      ], "زانست"),
      "دووشەمبی": makeDay("دووشەمبی", [
        { cls: "پۆلا 7", sub: "زانست" },
        null, null, null,
        { cls: "پۆلا 8", sub: "زانست" },
        { cls: "پۆلا 9", sub: "زانست" },
        null
      ], "زانست"),
      "سێشەمبی": makeDay("سێشەمبی", [
        null,
        { cls: "پۆلا 8", sub: "زانست" },
        null,
        { cls: "پۆلا 3 - أ", sub: "ئایین" },
        { cls: "پۆلا 9", sub: "زانست" },
        { cls: "پۆلا 7", sub: "زانست" },
        null
      ], "زانست"),
      "چوارشەمبی": makeDay("چوارشەمبی", [
        null,
        { cls: "پۆلا 8", sub: "زانست" },
        { cls: "پۆلا 9", sub: "زانست" },
        null, null,
        { cls: "پۆلا 7", sub: "زانست" },
        null
      ], "زانست"),
      "پێنچ شەمبی": makeDay("پێنچ شەمبی", [
        null, null,
        { cls: "پۆلا 7", sub: "زانست" },
        { cls: "پۆلا 9", sub: "زانست" },
        null,
        { cls: "پۆلا 8", sub: "زانست" },
        null
      ], "زانست"),
    }
  },

  // 4. شيماء شيماء (Shaima Shaima) - کۆمەڵایەتی، کارمەیی، دەروونناسی
  {
    id: "teacher_shaima",
    teacherName: "م. شیماء شیماء",
    subject: "کۆمەڵایەتی",
    lessonCountPerDay: 7,
    notes: "مامۆستای کۆمەڵایەتی، کارمەیی و دەروونناسی - قوتابخانا کانی زەرک",
    updatedAt: new Date().toISOString(),
    schedule: {
      "ئێکشەمبی": makeDay("ئێکشەمبی", [
        null,
        { cls: "پۆلا 6 - أ", sub: "کۆمەڵایەتی" },
        null, null,
        { cls: "پۆلا 4 - أ", sub: "کۆمەڵایەتی" },
        { cls: "پۆلا 9", sub: "کۆمەڵایەتی" },
        { cls: "پۆلا 8", sub: "کۆمەڵایەتی" },
      ], "کۆمەڵایەتی"),
      "دووشەمبی": makeDay("دووشەمبی", [
        { cls: "پۆلا 4 - ب", sub: "کۆمەڵایەتی" },
        { cls: "پۆلا 7", sub: "کۆمەڵایەتی" },
        null,
        { cls: "پۆلا 9", sub: "کارمەیی" },
        null,
        { cls: "پۆلا 6 - أ", sub: "کۆمەڵایەتی" },
        null
      ], "کۆمەڵایەتی"),
      "سێشەمبی": makeDay("سێشەمبی", [
        { cls: "پۆلا 9", sub: "کۆمەڵایەتی" },
        { cls: "پۆلا 4 - ب", sub: "کۆمەڵایەتی" },
        null,
        { cls: "پۆلا 8", sub: "دەروونناسی" },
        null,
        { cls: "پۆلا 5 - أ", sub: "کۆمەڵایەتی" },
        null
      ], "کۆمەڵایەتی"),
      "چوارشەمبی": makeDay("چوارشەمبی", [
        null,
        { cls: "پۆلا 7", sub: "کۆمەڵایەتی" },
        null,
        { cls: "پۆلا 8", sub: "کۆمەڵایەتی" },
        { cls: "پۆلا 9", sub: "کۆمەڵایەتی" },
        { cls: "پۆلا 8", sub: "کارمەیی" },
        null
      ], "کۆمەڵایەتی"),
      "پێنچ شەمبی": makeDay("پێنچ شەمبی", [
        null,
        { cls: "پۆلا 5 - أ", sub: "کۆمەڵایەتی" },
        null, null,
        { cls: "پۆلا 7", sub: "کارمەیی" },
        { cls: "پۆلا 4 - أ", sub: "کۆمەڵایەتی" },
        null
      ], "کۆمەڵایەتی"),
    }
  },

  // 5. هفرس (Hafres) - بیرکاری
  {
    id: "teacher_hafres",
    teacherName: "م. هفرس",
    subject: "بیرکاری",
    lessonCountPerDay: 7,
    notes: "مامۆستای بیرکاری پۆلێن سەرەتایی (3، 4، 5) - قوتابخانا کانی زەرک",
    updatedAt: new Date().toISOString(),
    schedule: {
      "ئێکشەمبی": makeDay("ئێکشەمبی", [
        { cls: "پۆلا 4 - ب", sub: "بیرکاری" },
        { cls: "پۆلا 4 - أ", sub: "بیرکاری" },
        { cls: "پۆلا 3 - أ", sub: "بیرکاری" },
        null,
        { cls: "پۆلا 5 - أ", sub: "بیرکاری" },
        { cls: "پۆلا 4 - أ", sub: "بیرکاری" },
        null
      ], "بیرکاری"),
      "دووشەمبی": makeDay("دووشەمبی", [
        { cls: "پۆلا 5 - أ", sub: "بیرکاری" },
        null, null,
        { cls: "پۆلا 3 - أ", sub: "بیرکاری" },
        { cls: "پۆلا 4 - ب", sub: "بیرکاری" },
        null, null
      ], "بیرکاری"),
      "سێشەمبی": makeDay("سێشەمبی", [
        { cls: "پۆلا 5 - أ", sub: "بیرکاری" },
        { cls: "پۆلا 3 - أ", sub: "بیرکاری" },
        null,
        { cls: "پۆلا 4 - ب", sub: "بیرکاری" },
        null, null, null
      ], "بیرکاری"),
      "چوارشەمبی": makeDay("چوارشەمبی", [
        { cls: "پۆلا 3 - أ", sub: "بیرکاری" },
        null,
        { cls: "پۆلا 3 - أ", sub: "بیرکاری" },
        { cls: "پۆلا 4 - ب", sub: "بیرکاری" },
        { cls: "پۆلا 4 - أ", sub: "بیرکاری" },
        null, null
      ], "بیرکاری"),
      "پێنچ شەمبی": makeDay("پێنچ شەمبی", [
        { cls: "پۆلا 4 - ب", sub: "بیرکاری" },
        { cls: "پۆلا 3 - أ", sub: "بیرکاری" },
        null,
        { cls: "پۆلا 4 - أ", sub: "بیرکاری" },
        null,
        { cls: "پۆلا 5 - أ", sub: "بیرکاری" },
        null
      ], "بیرکاری"),
    }
  },

  // 6. سناء (Sanaa) - زانست
  {
    id: "teacher_sanaa",
    teacherName: "م. سناء",
    subject: "زانست",
    lessonCountPerDay: 7,
    notes: "مامۆستای زانست پۆلێن 3، 4، 5 - قوتابخانا کانی زەرک",
    updatedAt: new Date().toISOString(),
    schedule: {
      "ئێکشەمبی": makeDay("ئێکشەمبی", [
        { cls: "پۆلا 5 - أ", sub: "زانست" },
        null,
        { cls: "پۆلا 4 - ب", sub: "زانست" },
        null, null,
        { cls: "پۆلا 4 - أ", sub: "زانست" },
        null
      ], "زانست"),
      "دووشەمبی": makeDay("دووشەمبی", [
        null,
        { cls: "پۆلا 3 - أ", sub: "زانست" },
        null,
        { cls: "پۆلا 4 - ب", sub: "زانست" },
        { cls: "پۆلا 4 - أ", sub: "زانست" },
        { cls: "پۆلا 5 - أ", sub: "زانست" },
        null
      ], "زانست"),
      "سێشەمبی": makeDay("سێشەمبی", [
        { cls: "پۆلا 3 - أ", sub: "زانست" },
        { cls: "پۆلا 4 - أ", sub: "زانست" },
        { cls: "پۆلا 5 - أ", sub: "زانست" },
        null,
        { cls: "پۆلا 4 - ب", sub: "زانست" },
        null, null
      ], "زانست"),
      "چوارشەمبی": makeDay("چوارشەمبی", [
        { cls: "پۆلا 3 - أ", sub: "زانست" },
        { cls: "پۆلا 4 - أ", sub: "زانست" },
        null, null, null,
        { cls: "پۆلا 4 - ب", sub: "زانست" },
        null
      ], "زانست"),
      "پێنچ شەمبی": makeDay("پێنچ شەمبی", [
        { cls: "پۆلا 5 - أ", sub: "زانست" },
        null,
        { cls: "پۆلا 4 - أ", sub: "زانست" },
        { cls: "پۆلا 5 - أ", sub: "زانست" },
        { cls: "پۆلا 3 - أ", sub: "زانست" },
        { cls: "پۆلا 4 - ب", sub: "زانست" },
        null
      ], "زانست"),
    }
  },

  // 7. افين (Avin) - بیرکاری
  {
    id: "teacher_avin",
    teacherName: "م. ئەڤین",
    subject: "بیرکاری",
    lessonCountPerDay: 7,
    notes: "مامۆستای بیرکاری (پۆلا 1، 6، 7، 8) - قوتابخانا کانی زەرک",
    updatedAt: new Date().toISOString(),
    schedule: {
      "ئێکشەمبی": makeDay("ئێکشەمبی", [
        { cls: "پۆلا 8", sub: "بیرکاری" },
        { cls: "پۆلا 1 - أ", sub: "بیرکاری" },
        { cls: "پۆلا 7", sub: "بیرکاری" },
        { cls: "پۆلا 6 - أ", sub: "بیرکاری" },
        null, null, null
      ], "بیرکاری"),
      "دووشەمبی": makeDay("دووشەمبی", [
        { cls: "پۆلا 8", sub: "بیرکاری" },
        { cls: "پۆلا 1 - أ", sub: "بیرکاری" },
        { cls: "پۆلا 7", sub: "بیرکاری" },
        { cls: "پۆلا 6 - أ", sub: "بیرکاری" },
        null, null, null
      ], "بیرکاری"),
      "سێشەمبی": makeDay("سێشەمبی", [
        { cls: "پۆلا 6 - أ", sub: "بیرکاری" },
        { cls: "پۆلا 7", sub: "بیرکاری" },
        { cls: "پۆلا 8", sub: "بیرکاری" },
        { cls: "پۆلا 1 - أ", sub: "بیرکاری" },
        null, null, null
      ], "بیرکاری"),
      "چوارشەمبی": makeDay("چوارشەمبی", [
        { cls: "پۆلا 8", sub: "بیرکاری" },
        { cls: "پۆلا 1 - أ", sub: "بیرکاری" },
        { cls: "پۆلا 6 - أ", sub: "بیرکاری" },
        { cls: "پۆلا 7", sub: "بیرکاری" },
        null, null, null
      ], "بیرکاری"),
      "پێنچ شەمبی": makeDay("پێنچ شەمبی", [
        { cls: "پۆلا 8", sub: "بیرکاری" },
        { cls: "پۆلا 7", sub: "بیرکاری" },
        { cls: "پۆلا 6 - أ", sub: "بیرکاری" },
        { cls: "پۆلا 1 - أ", sub: "بیرکاری" },
        null, null, null
      ], "بیرکاری"),
    }
  },

  // 8. هيفاء (Hayfa) - ئینگلیزی
  {
    id: "teacher_hayfa",
    teacherName: "م. هەیفا",
    subject: "ئینگلێزی",
    lessonCountPerDay: 7,
    notes: "مامۆستای ئینگلیزی (پۆلا 6، 7، 8، 9) - قوتابخانا کانی زەرک",
    updatedAt: new Date().toISOString(),
    schedule: {
      "ئێکشەمبی": makeDay("ئێکشەمبی", [
        { cls: "پۆلا 7", sub: "ئینگلێزی" },
        { cls: "پۆلا 9", sub: "ئینگلێزی" },
        { cls: "پۆلا 6 - أ", sub: "ئینگلێزی" },
        null,
        { cls: "پۆلا 8", sub: "ئینگلێزی" },
        null, null
      ], "ئینگلێزی"),
      "دووشەمبی": makeDay("دووشەمبی", [
        { cls: "پۆلا 9", sub: "ئینگلێزی" },
        { cls: "پۆلا 6 - أ", sub: "ئینگلێزی" },
        null,
        { cls: "پۆلا 8", sub: "ئینگلێزی" },
        { cls: "پۆلا 7", sub: "ئینگلێزی" },
        null, null
      ], "ئینگلێزی"),
      "سێشەمبی": makeDay("سێشەمبی", [
        { cls: "پۆلا 8", sub: "ئینگلێزی" },
        { cls: "پۆلا 6 - أ", sub: "ئینگلێزی" },
        { cls: "پۆلا 9", sub: "ئینگلێزی" },
        null,
        { cls: "پۆلا 7", sub: "ئینگلێزی" },
        null, null
      ], "ئینگلێزی"),
      "چوارشەمبی": makeDay("چوارشەمبی", [
        { cls: "پۆلا 9", sub: "ئینگلێزی" },
        { cls: "پۆلا 6 - أ", sub: "ئینگلێزی" },
        { cls: "پۆلا 7", sub: "ئینگلێزی" },
        null,
        { cls: "پۆلا 8", sub: "ئینگلێزی" },
        null, null
      ], "ئینگلێزی"),
      "پێنچ شەمبی": makeDay("پێنچ شەمبی", [
        { cls: "پۆلا 7", sub: "ئینگلێزی" },
        null,
        { cls: "پۆلا 9", sub: "ئینگلێزی" },
        null,
        { cls: "پۆلا 8", sub: "ئینگلێزی" },
        { cls: "پۆلا 6 - أ", sub: "ئینگلێزی" },
        null
      ], "ئینگلێزی"),
    }
  },

  // 9. بشتوان (Pishtwan) - کوردی و هونەر
  {
    id: "teacher_pishtwan",
    teacherName: "م. پشتوان",
    subject: "کوردی و هونەر",
    lessonCountPerDay: 7,
    notes: "مامۆستای کوردی و هونەر (پۆلا 3، 4، 5) - قوتابخانا کانی زەرک",
    updatedAt: new Date().toISOString(),
    schedule: {
      "ئێکشەمبی": makeDay("ئێکشەمبی", [
        null,
        { cls: "پۆلا 3 - أ", sub: "کوردی" },
        { cls: "پۆلا 4 - أ", sub: "هونەر" },
        null, null,
        { cls: "پۆلا 4 - ب", sub: "هونەر" },
        null
      ], "کوردی"),
      "دووشەمبی": makeDay("دووشەمبی", [
        null, null,
        { cls: "پۆلا 3 - أ", sub: "هونەر" },
        null,
        { cls: "پۆلا 3 - أ", sub: "کوردی" },
        { cls: "پۆلا 3 - أ", sub: "کوردی" },
        null
      ], "کوردی"),
      "سێشەمبی": makeDay("سێشەمبی", [
        null, null,
        { cls: "پۆلا 3 - أ", sub: "کوردی" },
        { cls: "پۆلا 4 - أ", sub: "هونەر" },
        { cls: "پۆلا 3 - أ", sub: "هونەر" },
        null, null
      ], "کوردی"),
      "چوارشەمبی": makeDay("چوارشەمبی", [
        null,
        { cls: "پۆلا 3 - أ", sub: "کوردی" },
        { cls: "پۆلا 4 - ب", sub: "هونەر" },
        null,
        { cls: "پۆلا 3 - أ", sub: "کوردی" },
        { cls: "پۆلا 5 - أ", sub: "هونەر" },
        null
      ], "کوردی"),
      "پێنچ شەمبی": makeDay("پێنچ شەمبی", [
        null, null,
        { cls: "پۆلا 3 - أ", sub: "کوردی" },
        { cls: "پۆلا 3 - أ", sub: "کوردی" },
        { cls: "پۆلا 5 - أ", sub: "هونەر" },
        null, null
      ], "کوردی"),
    }
  },

  // 10. سنكر (Sangar) - کوردی و هونەر
  {
    id: "teacher_sangar",
    teacherName: "م. سەنگەر",
    subject: "کوردی",
    lessonCountPerDay: 7,
    notes: "مامۆستای کوردی و هونەر (پۆلا 6، 7، 8، 9) - قوتابخانا کانی زەرک",
    updatedAt: new Date().toISOString(),
    schedule: {
      "ئێکشەمبی": makeDay("ئێکشەمبی", [
        null, null, null,
        { cls: "پۆلا 8", sub: "کوردی" },
        { cls: "پۆلا 7", sub: "کوردی" },
        { cls: "پۆلا 6 - أ", sub: "کوردی" },
        null
      ], "کوردی"),
      "دووشەمبی": makeDay("دووشەمبی", [
        { cls: "پۆلا 6 - أ", sub: "کوردی" },
        { cls: "پۆلا 9", sub: "کوردی" },
        { cls: "پۆلا 6 - أ", sub: "هونەر" },
        null, null,
        { cls: "پۆلا 8", sub: "کوردی" },
        null
      ], "کوردی"),
      "سێشەمبی": makeDay("سێشەمبی", [
        { cls: "پۆلا 7", sub: "کوردی" },
        null,
        { cls: "پۆلا 6 - أ", sub: "کوردی" },
        null,
        { cls: "پۆلا 8", sub: "کوردی" },
        { cls: "پۆلا 9", sub: "کوردی" },
        null
      ], "کوردی"),
      "چوارشەمبی": makeDay("چوارشەمبی", [
        null, null, null,
        { cls: "پۆلا 6 - أ", sub: "کوردی" },
        { cls: "پۆلا 6 - أ", sub: "هونەر" },
        { cls: "پۆلا 9", sub: "کوردی" },
        null
      ], "کوردی"),
      "پێنچ شەمبی": makeDay("پێنچ شەمبی", [
        { cls: "پۆلا 7", sub: "کوردی" },
        null, null,
        { cls: "پۆلا 8", sub: "کوردی" },
        { cls: "پۆلا 9", sub: "کوردی" },
        { cls: "پۆلا 7", sub: "کوردی" },
        null
      ], "کوردی"),
    }
  },

  // 11. ندي (Nada) - کوردی و هونەر
  {
    id: "teacher_nada",
    teacherName: "م. ندی",
    subject: "کوردی و هونەر",
    lessonCountPerDay: 7,
    notes: "مامۆستای کوردی و هونەر (پۆلا 1 و 2) - قوتابخانا کانی زەرک",
    updatedAt: new Date().toISOString(),
    schedule: {
      "ئێکشەمبی": makeDay("ئێکشەمبی", [
        { cls: "پۆلا 1 - أ", sub: "کوردی" },
        null,
        { cls: "پۆلا 1 - أ", sub: "هونەر" },
        { cls: "پۆلا 2 - أ", sub: "کوردی" },
        null,
        { cls: "پۆلا 1 - أ", sub: "کوردی" },
        null
      ], "کوردی"),
      "دووشەمبی": makeDay("دووشەمبی", [
        { cls: "پۆلا 2 - أ", sub: "کوردی" },
        null,
        { cls: "پۆلا 2 - أ", sub: "کوردی" },
        { cls: "پۆلا 1 - أ", sub: "کوردی" },
        { cls: "پۆلا 1 - أ", sub: "هونەر" },
        null, null
      ], "کوردی"),
      "سێشەمبی": makeDay("سێشەمبی", [
        { cls: "پۆلا 2 - أ", sub: "کوردی" },
        { cls: "پۆلا 2 - أ", sub: "کوردی" },
        null, null,
        { cls: "پۆلا 1 - أ", sub: "کوردی" },
        { cls: "پۆلا 1 - أ", sub: "کوردی" },
        null
      ], "کوردی"),
      "چوارشەمبی": makeDay("چوارشەمبی", [
        null, null,
        { cls: "پۆلا 1 - أ", sub: "کوردی" },
        { cls: "پۆلا 2 - أ", sub: "کوردی" },
        { cls: "پۆلا 2 - أ", sub: "کوردی" },
        { cls: "پۆلا 2 - أ", sub: "هونەر" },
        null
      ], "کوردی"),
      "پێنچ شەمبی": makeDay("پێنچ شەمبی", [
        null,
        { cls: "پۆلا 2 - أ", sub: "کوردی" },
        { cls: "پۆلا 1 - أ", sub: "کوردی" },
        { cls: "پۆلا 2 - أ", sub: "هونەر" },
        { cls: "پۆلا 1 - أ", sub: "کوردی" },
        null, null
      ], "کوردی"),
    }
  },

  // 12. ئاره زو (Arezu) - ئینگلیزی و هونەر
  {
    id: "teacher_arezu",
    teacherName: "م. ئارەزوو",
    subject: "ئینگلێزی",
    lessonCountPerDay: 7,
    notes: "مامۆستای ئینگلیزی (پۆلا 4 و 5) و هونەر (پۆلا 7، 8، 9) - قوتابخانا کانی زەرک",
    updatedAt: new Date().toISOString(),
    schedule: {
      "ئێکشەمبی": makeDay("ئێکشەمبی", [
        { cls: "پۆلا 4 - أ", sub: "ئینگلێزی" },
        { cls: "پۆلا 8", sub: "هونەر" },
        { cls: "پۆلا 5 - أ", sub: "ئینگلێزی" },
        { cls: "پۆلا 4 - ب", sub: "ئینگلێزی" },
        null, null, null
      ], "ئینگلێزی"),
      "دووشەمبی": makeDay("دووشەمبی", [
        null,
        { cls: "پۆلا 5 - أ", sub: "ئینگلێزی" },
        { cls: "پۆلا 4 - ب", sub: "ئینگلێزی" },
        { cls: "پۆلا 4 - أ", sub: "ئینگلێزی" },
        null, null, null
      ], "ئینگلێزی"),
      "سێشەمبی": makeDay("سێشەمبی", [
        { cls: "پۆلا 4 - أ", sub: "ئینگلێزی" },
        { cls: "پۆلا 5 - أ", sub: "ئینگلێزی" },
        { cls: "پۆلا 4 - ب", sub: "ئینگلێزی" },
        { cls: "پۆلا 4 - ب", sub: "هونەر" },
        null, null, null
      ], "ئینگلێزی"),
      "چوارشەمبی": makeDay("چوارشەمبی", [
        { cls: "پۆلا 4 - ب", sub: "ئینگلێزی" },
        { cls: "پۆلا 5 - أ", sub: "ئینگلێزی" },
        { cls: "پۆلا 4 - أ", sub: "ئینگلێزی" },
        { cls: "پۆلا 9", sub: "هونەر" },
        null, null, null
      ], "ئینگلێزی"),
      "پێنچ شەمبی": makeDay("پێنچ شەمبی", [
        { cls: "پۆلا 4 - أ", sub: "ئینگلێزی" },
        { cls: "پۆلا 4 - ب", sub: "ئینگلێزی" },
        { cls: "پۆلا 5 - أ", sub: "ئینگلێزی" },
        { cls: "پۆلا 7", sub: "هونەر" },
        null, null, null
      ], "ئینگلێزی"),
    }
  },

  // 13. هيلين (Helin) - کوردی، کارمەیی، ئایین
  {
    id: "teacher_helin",
    teacherName: "م. هێلین",
    subject: "کوردی",
    lessonCountPerDay: 7,
    notes: "مامۆستای کوردی (پۆلا 4 و 5) - قوتابخانا کانی زەرک",
    updatedAt: new Date().toISOString(),
    schedule: {
      "ئێکشەمبی": makeDay("ئێکشەمبی", [
        { cls: "پۆلا 4 - أ", sub: "کوردی" },
        { cls: "پۆلا 5 - أ", sub: "کوردی" },
        null,
        { cls: "پۆلا 4 - أ", sub: "کوردی" },
        { cls: "پۆلا 4 - ب", sub: "کوردی" },
        null, null
      ], "کوردی"),
      "دووشەمبی": makeDay("دووشەمبی", [
        null,
        { cls: "پۆلا 4 - ب", sub: "کوردی" },
        { cls: "پۆلا 5 - أ", sub: "کارمەیی" },
        null,
        { cls: "پۆلا 5 - أ", sub: "کوردی" },
        { cls: "پۆلا 4 - أ", sub: "کوردی" },
        null
      ], "کوردی"),
      "سێشەمبی": makeDay("سێشەمبی", [
        null, null,
        { cls: "پۆلا 4 - أ", sub: "کوردی" },
        { cls: "پۆلا 5 - أ", sub: "ئایین" },
        { cls: "پۆلا 5 - أ", sub: "کوردی" },
        null, null
      ], "کوردی"),
      "چوارشەمبی": makeDay("چوارشەمبی", [
        { cls: "پۆلا 4 - أ", sub: "کارمەیی" },
        { cls: "پۆلا 4 - ب", sub: "کوردی" },
        { cls: "پۆلا 5 - أ", sub: "کوردی" },
        null,
        { cls: "پۆلا 4 - ب", sub: "کارمەیی" },
        null, null
      ], "کوردی"),
      "پێنچ شەمبی": makeDay("پێنچ شەمبی", [
        { cls: "پۆلا 6 - أ", sub: "کارمەیی" },
        { cls: "پۆلا 4 - أ", sub: "کوردی" },
        null,
        { cls: "پۆلا 5 - أ", sub: "ئایین" },
        { cls: "پۆلا 4 - ب", sub: "کوردی" },
        null, null
      ], "کوردی"),
    }
  },

  // 14. مهاباد (Mahabad) - ئایین و عەرەبی
  {
    id: "teacher_mahabad",
    teacherName: "م. مەهاباد",
    subject: "ئایین و عەرەبی",
    lessonCountPerDay: 7,
    notes: "مامۆستای ئایین و عەرەبی (پۆلا 1 تا 7) - قوتابخانا کانی زەرک",
    updatedAt: new Date().toISOString(),
    schedule: {
      "ئێکشەمبی": makeDay("ئێکشەمبی", [
        { cls: "پۆلا 2 - أ", sub: "ئایین" },
        { cls: "پۆلا 4 - ب", sub: "عەرەبی" },
        null,
        { cls: "پۆلا 5 - أ", sub: "عەرەبی" },
        null,
        { cls: "پۆلا 7", sub: "ئایین" },
        null
      ], "ئایین"),
      "دووشەمبی": makeDay("دووشەمبی", [
        null,
        { cls: "پۆلا 4 - ب", sub: "ئایین" },
        { cls: "پۆلا 4 - أ", sub: "عەرەبی" },
        { cls: "پۆلا 5 - أ", sub: "عەرەبی" },
        null,
        { cls: "پۆلا 4 - ب", sub: "عەرەبی" },
        null
      ], "عەرەبی"),
      "سێشەمبی": makeDay("سێشەمبی", [
        { cls: "پۆلا 4 - ب", sub: "ئایین" },
        { cls: "پۆلا 1 - أ", sub: "ئایین" },
        null, null, null,
        { cls: "پۆلا 6 - أ", sub: "ئایین" },
        null
      ], "ئایین"),
      "چوارشەمبی": makeDay("چوارشەمبی", [
        { cls: "پۆلا 1 - أ", sub: "ئایین" },
        null, null,
        { cls: "پۆلا 4 - أ", sub: "عەرەبی" },
        { cls: "پۆلا 5 - أ", sub: "عەرەبی" },
        { cls: "پۆلا 4 - أ", sub: "ئایین" },
        null
      ], "ئایین"),
      "پێنچ شەمبی": makeDay("پێنچ شەمبی", [
        { cls: "پۆلا 2 - أ", sub: "ئایین" },
        { cls: "پۆلا 6 - أ", sub: "ئایین" },
        { cls: "پۆلا 4 - ب", sub: "عەرەبی" },
        { cls: "پۆلا 4 - ب", sub: "ئایین" },
        { cls: "پۆلا 4 - أ", sub: "عەرەبی" },
        null, null
      ], "ئایین"),
    }
  },

  // 15. سولين (Solin) - ئینگلیزی و کارمەیی
  {
    id: "teacher_solin",
    teacherName: "م. سۆلین",
    subject: "ئینگلێزی",
    lessonCountPerDay: 7,
    notes: "مامۆستای ئینگلیزی (پۆلا 1، 2، 3) و کارمەیی - قوتابخانا کانی زەرک",
    updatedAt: new Date().toISOString(),
    schedule: {
      "ئێکشەمبی": makeDay("ئێکشەمبی", [
        { cls: "پۆلا 3 - أ", sub: "کارمەیی" },
        null,
        { cls: "پۆلا 2 - أ", sub: "ئینگلێزی" },
        null,
        { cls: "پۆلا 1 - أ", sub: "ئینگلێزی" },
        { cls: "پۆلا 3 - أ", sub: "ئینگلێزی" },
        null
      ], "ئینگلێزی"),
      "دووشەمبی": makeDay("دووشەمبی", [
        { cls: "پۆلا 3 - أ", sub: "ئینگلێزی" },
        null,
        { cls: "پۆلا 1 - أ", sub: "ئینگلێزی" },
        null,
        { cls: "پۆلا 2 - أ", sub: "ئینگلێزی" },
        null, null
      ], "ئینگلێزی"),
      "سێشەمبی": makeDay("سێشەمبی", [
        { cls: "پۆلا 1 - أ", sub: "ئینگلێزی" },
        null, null,
        { cls: "پۆلا 2 - أ", sub: "کارمەیی" },
        { cls: "پۆلا 2 - أ", sub: "ئینگلێزی" },
        { cls: "پۆلا 3 - أ", sub: "ئینگلێزی" },
        null
      ], "ئینگلێزی"),
      "چوارشەمبی": makeDay("چوارشەمبی", [
        { cls: "پۆلا 2 - أ", sub: "ئینگلێزی" },
        null, null, null,
        { cls: "پۆلا 1 - أ", sub: "ئینگلێزی" },
        { cls: "پۆلا 3 - أ", sub: "ئینگلێزی" },
        null
      ], "ئینگلێزی"),
      "پێنچ شەمبی": makeDay("پێنچ شەمبی", [
        { cls: "پۆلا 3 - أ", sub: "ئینگلێزی" },
        { cls: "پۆلا 1 - أ", sub: "کارمەیی" },
        { cls: "پۆلا 2 - أ", sub: "ئینگلێزی" },
        null, null,
        { cls: "پۆلا 1 - أ", sub: "ئینگلێزی" },
        null
      ], "ئینگلێزی"),
    }
  },

  // 16. اواز رشيد (Awaz Rashid) - زانست و بیرکاری
  {
    id: "teacher_awaz",
    teacherName: "م. ئاواز ڕەشید",
    subject: "زانست و بیرکاری",
    lessonCountPerDay: 7,
    notes: "مامۆستای زانست (پۆلا 1، 2، 6) و بیرکاری (پۆلا 2) - قوتابخانا کانی زەرک",
    updatedAt: new Date().toISOString(),
    schedule: {
      "ئێکشەمبی": makeDay("ئێکشەمبی", [
        { cls: "پۆلا 6 - أ", sub: "زانست" },
        null, null,
        { cls: "پۆلا 1 - أ", sub: "زانست" },
        { cls: "پۆلا 2 - أ", sub: "بیرکاری" },
        { cls: "پۆلا 2 - أ", sub: "زانست" },
        null
      ], "زانست"),
      "دووشەمبی": makeDay("دووشەمبی", [
        { cls: "پۆلا 1 - أ", sub: "زانست" },
        { cls: "پۆلا 2 - أ", sub: "بیرکاری" },
        null, null,
        { cls: "پۆلا 2 - أ", sub: "زانست" },
        { cls: "پۆلا 2 - أ", sub: "زانست" },
        null
      ], "زانست"),
      "سێشەمبی": makeDay("سێشەمبی", [
        null, null,
        { cls: "پۆلا 2 - أ", sub: "زانست" },
        null,
        { cls: "پۆلا 6 - أ", sub: "زانست" },
        { cls: "پۆلا 2 - أ", sub: "بیرکاری" },
        null
      ], "زانست"),
      "چوارشەمبی": makeDay("چوارشەمبی", [
        { cls: "پۆلا 6 - أ", sub: "زانست" },
        { cls: "پۆلا 2 - أ", sub: "بیرکاری" },
        null,
        { cls: "پۆلا 1 - أ", sub: "زانست" },
        null,
        { cls: "پۆلا 2 - أ", sub: "بیرکاری" },
        null
      ], "زانست"),
      "پێنچ شەمبی": makeDay("پێنچ شەمبی", [
        { cls: "پۆلا 1 - أ", sub: "زانست" },
        null, null,
        { cls: "پۆلا 6 - أ", sub: "زانست" },
        { cls: "پۆلا 2 - أ", sub: "بیرکاری" },
        null, null
      ], "زانست"),
    }
  },

  // 17. نورا (Nora) - وەرزش
  {
    id: "teacher_nora",
    teacherName: "م. نورا",
    subject: "وەرزش",
    lessonCountPerDay: 7,
    notes: "مامۆستای پەروەردەیا وەرزشی بۆ هەموو پۆلەکان - قوتابخانا کانی زەرک",
    updatedAt: new Date().toISOString(),
    schedule: {
      "ئێکشەمبی": makeDay("ئێکشەمبی", [
        null,
        { cls: "پۆلا 2 - أ", sub: "وەرزش" },
        null,
        { cls: "پۆلا 3 - أ", sub: "وەرزش" },
        { cls: "پۆلا 6 - أ", sub: "وەرزش" },
        { cls: "پۆلا 5 - أ", sub: "وەرزش" },
        null
      ], "وەرزش"),
      "دووشەمبی": makeDay("دووشەمبی", [
        null,
        { cls: "پۆلا 8", sub: "وەرزش" },
        null,
        { cls: "پۆلا 2 - أ", sub: "وەرزش" },
        null,
        { cls: "پۆلا 1 - أ", sub: "وەرزش" },
        null
      ], "وەرزش"),
      "سێشەمبی": makeDay("سێشەمبی", [
        null, null,
        { cls: "پۆلا 1 - أ", sub: "وەرزش" },
        { cls: "پۆلا 7", sub: "وەرزش" },
        { cls: "پۆلا 4 - أ", sub: "وەرزش" },
        { cls: "پۆلا 4 - ب", sub: "وەرزش" },
        null
      ], "وەرزش"),
      "چوارشەمبی": makeDay("چوارشەمبی", [
        null, null, null,
        { cls: "پۆلا 3 - أ", sub: "وەرزش" },
        null,
        { cls: "پۆلا 1 - أ", sub: "وەرزش" },
        null
      ], "وەرزش"),
      "پێنچ شەمبی": makeDay("پێنچ شەمبی", [
        null,
        { cls: "پۆلا 9", sub: "وەرزش" },
        null, null,
        { cls: "پۆلا 2 - أ", sub: "وەرزش" },
        { cls: "پۆلا 3 - أ", sub: "وەرزش" },
        null
      ], "وەرزش"),
    }
  }
];
