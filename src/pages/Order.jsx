import { useForm } from "react-hook-form";
import Input from "../common/Input";
import QueueNavbar from "../components/QueueNavbar";

const Order = () => {
  return (
    <div>
      <QueueNavbar atHome />

      <div className="max-w-[1200px] flex flex-col items-center">
        <MokePhatThope />
        <HtaMinThope />
      </div>
    </div>
  );
};

export default Order;

const MokePhatThope = () => {
  const { control, register, watch } = useForm({
    defaultValues: { mokeName: "Moke Phat Thope" },
  });

  return (
    <div className=" mb-5">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Moke Phat Thope
      </button>

      {/* This is "Moke Phat Thope" dialog */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          {/* checkbox */}
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">Cilantro</span>
              <input type="checkbox" {...register("Cilantro")} />
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">Soup</span>
              <input type="checkbox" {...register("Soup")} />
            </label>
          </div>

          {/* radio  */}
          <label>
            <div className="flex space-x-3 mb-3">
              <input type="radio" value={0} {...register("spice lvl")} />
              <span>Spice lvl (0)</span>
            </div>
          </label>

          <label>
            <div className="flex space-x-3 mb-3">
              <input type="radio" value={1} {...register("spice lvl")} />
              <span>Spice lvl (1)</span>
            </div>
          </label>

          <label>
            <div className="flex space-x-3 mb-3">
              <input type="radio" value={2} {...register("spice lvl")} />
              <span>Spice lvl (2)</span>
            </div>
          </label>

          <div>
            <label>Name</label>
            <Input name="name" control={control} />
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
            <button onClick={() => console.log("the values", watch())}>
              Charge
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

const HtaMinThope = () => {
  const { control, register, watch } = useForm({
    defaultValues: { mokeName: "Hta Min Thope" },
  });

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Hta Min Thope
      </button>

      {/* This is "Hta Min Thope" dialog */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          {/* checkboxes */}
          <div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Meat Ball</span>
                <input type="checkbox" {...register("Meat Ball")} />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Soup</span>
                <input type="checkbox" {...register("Soup")} />
              </label>
            </div>
          </div>

          <div>
            <label>Name</label>
            <Input name="name" control={control} />
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
            <button onClick={() => console.log("the values", watch())}>
              Charge
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};
