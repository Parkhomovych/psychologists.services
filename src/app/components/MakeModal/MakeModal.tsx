import Modal from "../Modal/Modal";

type Props = {
  name: string | undefined;
  closeModal: () => void;
};
export default function MakeModal({ name, closeModal }: Props) {
  return (
    <Modal closeModal={closeModal} style="w-[600px] flex flex-col gap-y-10">
      <div>
        <h2 className="mb-5 font-medium text-4xl">
          Make an appointment with a psychologists
        </h2>
        <p className="font-normal text-base text-white06">
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment with a
          professional psychologist. We guarantee confidentiality and respect
          for your privacy.
        </p>
      </div>

      <div>Your psychologists</div>
      <form className="flex flex-col gap-y-4">
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <div className="flex gap-x-2">
          <input
            className="input"
            type="text"
            name="phone"
            placeholder="+380"
            required
          />
          <input className="input" type="date" name="date" required />
        </div>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea className="input" name="" placeholder="Comment" />
        <button className="mt-10 w-[472px] h-[52px] flex items-center justify-center bg-green  rounded-[30px] hover:bg-activeGreen animateColor">
          <span className="font-medium text-base text-white">Send</span>
        </button>
      </form>
    </Modal>
  );
}
