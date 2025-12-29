import { Swiper, SwiperSlide } from "swiper/react";
import { teamMembers } from "../../data/teamMember";
import MemberCard from "../MemberCard/MemberCard";

export default function TeamSection() {
  return (
    <section className="w-full px-4 md:px-[100px] py-[60px] flex flex-col items-center gap-[60px] gradient-landing-bg-reverse">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-2.5 w-full max-w-[520px]">
        <h2 className="text-white text-center font-rajdhani text-4xl leading-[48px]">
          MEET THE TEAM
        </h2>
        <p className="text-white text-center font-rajdhani text-lg leading-7">
          Take a look at your favorite players
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="w-full flex flex-col gap-2.5">
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {teamMembers.slice(0, 3).map((member, index) => (
            <SwiperSlide key={index}>
              <div className="py-6">
                <MemberCard
                  imageUrl={member.imageUrl}
                  nickname={member.nickname}
                  realName={member.realName}
                  role={member.role}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View More */}
        <div className="flex justify-end py-2.5">
          <p className="text-white text-xs">And more..</p>
        </div>
      </div>
    </section>
  );
}
