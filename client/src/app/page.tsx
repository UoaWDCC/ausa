import TextBoxComponent from './components/text-box/TextBox'

const Home = () => {
  return (
    <div className="m-4 flex flex-col gap-2">
      <div className="flex gap-2">
        <TextBoxComponent
          text="hello this is a primary textbox component"
          theme="primary"
          border={true}
        />
        <TextBoxComponent
          text="hello this is a secondary textbox component"
          theme="secondary"
          border={true}
        />
        <TextBoxComponent
          text="hello this is a ghost textbox component"
          theme="ghost"
          border={true}
        />
        <TextBoxComponent
          text="hello this is a warning textbox component"
          theme="warning"
          border={true}
        />{' '}
        <TextBoxComponent
          text="hello this is a warning textbox component"
          theme="error"
          border={true}
        />{' '}
      </div>
      <div className="flex gap-2">
        <TextBoxComponent
          text="hello this is a primary textbox component"
          theme="primary"
          border={false}
        />
        <TextBoxComponent
          text="hello this is a secondary textbox component"
          theme="secondary"
          border={false}
        />
        <TextBoxComponent
          text="hello this is a ghost textbox component"
          theme="ghost"
          border={false}
        />
        <TextBoxComponent
          text="hello this is a warning textbox component"
          theme="warning"
          border={false}
        />{' '}
        <TextBoxComponent
          text="hello this is a warning textbox component"
          theme="error"
          border={false}
        />{' '}
      </div>
      <div className="flex gap-2">
        <TextBoxComponent
          text="Slam Dunk (stylized in all caps) is a Japanese sports manga series written and illustrated by Takehiko Inoue. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from October 1990 to June 1996, with the chapters collected into 31 tankōbon volumes. The story follows Hanamichi Sakuragi, a brash and impulsive high school student who joins a basketball team at Shōhoku High School, located in the Shōnan area of Japan."
          theme="secondary"
          border={true}
        >
          <div>
            <img
              src="https://p3-pc-sign.douyinpic.com/tos-cn-i-0813/1f6c173661544b9692ac336eb949aca2~tplv-dy-aweme-images:q75.webp?biz_tag=aweme_images&from=327834062&lk3s=138a59ce&s=PackSourceEnum_SEARCH&sc=image&se=false&x-expires=1748671200&x-signature=8jTLLNMUNG5yMzCrm94yvrpXQJ0%3D"
              width={200}
              height={200}
              alt="slam dunk"
            />
          </div>
        </TextBoxComponent>
        <TextBoxComponent
          text="Slam Dunk (stylized in all caps) is a Japanese sports manga series written and illustrated by Takehiko Inoue. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from October 1990 to June 1996, with the chapters collected into 31 tankōbon volumes. The story follows Hanamichi Sakuragi, a brash and impulsive high school student who joins a basketball team at Shōhoku High School, located in the Shōnan area of Japan."
          theme="ghost"
          border={true}
        >
          <div>
            <img
              src="https://p3-pc-sign.douyinpic.com/tos-cn-i-0813/1f6c173661544b9692ac336eb949aca2~tplv-dy-aweme-images:q75.webp?biz_tag=aweme_images&from=327834062&lk3s=138a59ce&s=PackSourceEnum_SEARCH&sc=image&se=false&x-expires=1748671200&x-signature=8jTLLNMUNG5yMzCrm94yvrpXQJ0%3D"
              width={200}
              height={200}
              alt="slam dunk"
            />
          </div>
        </TextBoxComponent>
        <TextBoxComponent
          text="Slam Dunk (stylized in all caps) is a Japanese sports manga series written and illustrated by Takehiko Inoue. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from October 1990 to June 1996, with the chapters collected into 31 tankōbon volumes. The story follows Hanamichi Sakuragi, a brash and impulsive high school student who joins a basketball team at Shōhoku High School, located in the Shōnan area of Japan."
          theme="primary"
          border={true}
        >
          <div>
            <img
              src="https://p3-pc-sign.douyinpic.com/tos-cn-i-0813/1f6c173661544b9692ac336eb949aca2~tplv-dy-aweme-images:q75.webp?biz_tag=aweme_images&from=327834062&lk3s=138a59ce&s=PackSourceEnum_SEARCH&sc=image&se=false&x-expires=1748671200&x-signature=8jTLLNMUNG5yMzCrm94yvrpXQJ0%3D"
              width={200}
              height={200}
              alt="slam dunk"
            />
          </div>
        </TextBoxComponent>{' '}
        <TextBoxComponent
          text="Slam Dunk (stylized in all caps) is a Japanese sports manga series written and illustrated by Takehiko Inoue. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from October 1990 to June 1996, with the chapters collected into 31 tankōbon volumes. The story follows Hanamichi Sakuragi, a brash and impulsive high school student who joins a basketball team at Shōhoku High School, located in the Shōnan area of Japan."
          theme="warning"
          border={true}
        >
          <div>
            <img
              src="https://p3-pc-sign.douyinpic.com/tos-cn-i-0813/1f6c173661544b9692ac336eb949aca2~tplv-dy-aweme-images:q75.webp?biz_tag=aweme_images&from=327834062&lk3s=138a59ce&s=PackSourceEnum_SEARCH&sc=image&se=false&x-expires=1748671200&x-signature=8jTLLNMUNG5yMzCrm94yvrpXQJ0%3D"
              width={200}
              height={200}
              alt="slam dunk"
            />
          </div>
        </TextBoxComponent>
      </div>
    </div>
  )
}
export default Home
