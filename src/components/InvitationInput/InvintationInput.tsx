import React, { Dispatch, FC, SetStateAction } from "react";
import "./InvitationInputStyle.scss";

interface Props {
  id: number;
  src: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

const InvitationInput: FC<Props> = ({ id, src, setEmail }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <label htmlFor="invitaionInput">
        <h2 className="small my-10">Participant {id}</h2>
        <div className="input_container">
          <img src={src} alt="hat" />
          <input
            type="text"
            id="invitationInput"
            placeholder="email or phone number"
            onChange={handleChange}
            required
          />
        </div>
      </label>
    </div>
  );
};

export default InvitationInput;
