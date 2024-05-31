import { Outline, Innerline } from './style'

const Avatar = () => {
  return (
    <Outline>
      <Innerline>
        <img
          src="/assets/avatar.png"
          alt="avatar Image"
          className="object-cover"
          width="100%"
          height="100%"
        />
      </Innerline>
    </Outline>
  );
}

export default Avatar