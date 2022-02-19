import Button from "../Button";
import { ValidationMessageWrapper } from "./ValidationMessageWrapper";

const ValidationMessage = ({
  texte,
  name,
  onClick,
}: ValidationMessageProps) => {
  return (
    /* Validation Message */
    <ValidationMessageWrapper>
      <div className="popup">
        <p>{texte}</p>
        <div className="text-right">
          <Button
            type="submit"
            value="Oui"
            className="dialog-btn btn-primary "
            name={name}
            id="confirm"
            onClick={onClick}
          />
          <Button
            type="submit"
            value="Non"
            className="dialog-btn btn-cancel"
            name={name}
            id="cancel"
            onClick={onClick}
          />
        </div>
      </div>
    </ValidationMessageWrapper>
  );
};

export default ValidationMessage;
