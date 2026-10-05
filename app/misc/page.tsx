import type { Metadata } from "next";
import { PageHeader } from "@/components/chrome";

export const metadata: Metadata = {
  title: "misc",
  description: "Non-tech stuff I do. Translations, writing, and other creative detours.",
};

type Line = [en: string, vi: string];

const SECTIONS: { label: string; lines: Line[] }[] = [
  {
    label: "Verse",
    lines: [
      ["Finding yourself, all alone in a chaotic world", "Thấy chính bản thân, độc hành giữa thế giới đảo điên"],
      ["Engulf your own soul, feel the passion and fervor", "Thiêu rụi linh hồn, cảm nhận ngọn lửa rực cháy"],
      ["In the empty horizon", "Nơi chân trời hoang vắng"],
      ["Where mortals fall", "Phàm nhân ngã xuống"],
      ["Will you see what lies beyond the night?", "Liệu bạn thấy được gì sau màn đêm?"],
    ],
  },
  {
    label: "Chorus",
    lines: [
      ["So go, go find your spark", "Bước tiếp, tìm tia lửa đi"],
      ["Go find your flame", "Tìm ngọn lửa đi"],
      ["Tear down the darkness of null and void", "Xé tan bóng tối nơi cõi hư vô"],
      ["Go find your spark, and ignite the light that shapes your desire", "Tìm lại tia lửa, thắp lên ánh sáng định hình khát vọng"],
      ["Go, go find your spark, go find your flame", "Đi đi, tìm lấy tia lửa, tìm lấy ngọn lửa"],
      ["Reclaim the darkness through null and void", "Đoạt lại bóng đêm từ vực thẳm sâu"],
      ["Go find your spark, and ignite the long lost world that you forgot", "Tìm lại tia lửa, thức tỉnh thế giới bạn đã lãng quên"],
      ["All the suffering, repeat, again and again and again", "Mọi nỗi đau đớn, lặp đi, lặp lại chẳng hề dừng lại"],
      ["Feel the cycle of death repeat, again and again and again and again", "Vòng lặp cái chết bủa vây, lại tới lại tới lại tới lại tới một lần nữa"],
    ],
  },
  {
    label: "Bridge 1",
    lines: [
      ["Feel the difference of a broken world", "Hãy nếm trải một thế giới vỡ tan"],
      ["A nirvanic concept fought so hard but never enough", "Cõi Niết bàn xa xôi, dẫu chiến đấu vẫn là chưa đủ"],
      ["Consequential, feel the difference in your head", "Nghiệp quả nhãn tiền, đau nhói sâu trong tâm trí bạn"],
      ["Feel the void consuming your heart in your long lost hell", "Mặc cho hư vô nuốt chửng con tim giữa địa ngục này"],
    ],
  },
  {
    label: "Verse",
    lines: [
      ["Finding yourself, all alone in a chaotic world", "Thấy chính bản thân, độc hành giữa thế giới đảo điên"],
      ["Feel the passion and fervor, engulf your own soul", "Cảm nhận ngọn lửa cháy, thiêu rụi linh hồn"],
      ["In the empty horizon, where mortals fall", "Nơi chân trời hoang vắng, phàm nhân ngã xuống"],
      ["Will you see what lies beyond the night?", "Liệu bạn thấy được gì sau màn đêm?"],
    ],
  },
  {
    label: "Chorus",
    lines: [
      ["So go, go find your spark", "Bước tiếp, tìm tia lửa đi"],
      ["Go find your flame", "Tìm ngọn lửa đi"],
      ["Tear down the darkness of null and void", "Xé tan bóng tối nơi cõi hư vô"],
      ["Go find your spark, and ignite the light that shapes your desire", "Tìm lại tia lửa, thắp lên ánh sáng định hình khát vọng"],
      ["Go, go find your spark, go find your flame", "Đi đi, tìm lấy tia lửa, tìm lấy ngọn lửa"],
      ["Reclaim the darkness through null and void", "Đoạt lại bóng đêm từ vực thẳm sâu"],
      ["Go find your spark, and ignite the long lost world that you forgot", "Tìm lại tia lửa, thức tỉnh thế giới bạn đã lãng quên"],
      ["All the suffering, repeat, again and again and again", "Mọi nỗi đau đớn, lặp đi, lặp lại chẳng hề dừng lại"],
      ["Feel the cycle of death repeat, again and again and again and again", "Vòng lặp cái chết bủa vây, lại tới lại tới lại tới lại tới một lần nữa"],
    ],
  },
  {
    label: "Bridge 2",
    lines: [
      ["You grasp the hell of the world where we stand", "Bạn thấu hiểu thực tại địa ngục chúng ta đang đứng"],
      ["Yet you fail to see the reason at the brink of the end", "Nhưng lại chẳng tìm ra lối thoát khi tận thế cận kề"],
      ["Uneventful; feel the consequence of your mistake", "Lặng yên vô vọng; cảm nhận cái giá từ sai lầm xưa"],
      ["A neverending maze of madness killing you", "Mê cung điên loạn vô tận đang gặm nhấm bạn"],
      ["Finding yourself consumed by the pressure", "Thấy bản thân bị áp lực bóp nghẹt"],
      ["In a chaotic dimension, at the brink of the end", "Giữa không gian hỗn loạn, ngay sát giờ diệt vong"],
      ["Is it death that cannot be escaped?", "Phải chăng cái chết là điều không thể tránh?"],
      ["Is there no other means to an end of this nightmare?", "Hay thực sự chẳng còn cách nào xóa sạch cơn ác mộng?"],
    ],
  },
];

export default function MiscPage() {
  return (
    <div className="misc-layout">
      <aside className="misc-sidebar">
        <p className="sidebar-heading">Entries</p>
        <div className="sidebar-year-group">
          <p className="sidebar-year">2026</p>
          <ul className="sidebar-post-list">
            <li>
              <a href="#find-the-flame" className="sidebar-active">
                Find Your Flame (Nullscape OST)
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <main className="misc-main">
        <div className="misc-page-header">
          <h1>
            misc<span className="c-accent">()</span>
          </h1>
          <p className="misc-page-desc">
            Non-tech stuff I do. Translations, writing, and other creative detours. Updated whenever the mood
            strikes.
          </p>
        </div>

        <article id="find-the-flame" className="lyrics-entry">
          <div className="entry-header">
            <p className="entry-label">Song Translation</p>
            <h2 className="entry-title">Find Your Flame</h2>
            <p className="entry-artist">Nullscape &mdash; OST</p>
            <div className="entry-meta">
              <span className="meta-date">May 2026</span>
              <span className="meta-sep">&middot;</span>
              <span className="meta-lang">EN &rarr; VI</span>
            </div>
            <p className="entry-context">
              A Vietnamese translation of <em>Find Your Flame</em> from the Nullscape original soundtrack. I&apos;m
              just an amateur, and this isn&apos;t meant for singing — just a rough translation to capture the
              meaning.
            </p>
          </div>

          <div className="lyrics-body">
            {SECTIONS.map((section, i) => (
              <div className="lyrics-section" key={`${section.label}-${i}`}>
                <h3 className="lyrics-section-label">[{section.label}]</h3>
                {section.lines.map(([en, vi]) => (
                  <div className="lyric-line" key={en}>
                    <span className="line-en">{en}</span>
                    <span className="line-vi">{vi}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}