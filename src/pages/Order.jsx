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
    defaultValues: { menuName: "Moke Phat Thope" },
  });

  const isSelectedSoup = watch("soup");

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
          {/* Main Dish spice lvl*/}
          <div>
            <label>
              <div className="flex space-x-3 mb-3">
                <input
                  type="radio"
                  value={0}
                  {...register("mainDishSpiceLvl")}
                />
                <span>Spice lvl (0)</span>
              </div>
            </label>

            <label>
              <div className="flex space-x-3 mb-3">
                <input
                  type="radio"
                  value={1}
                  {...register("mainDishSpiceLvl")}
                />
                <span>Spice lvl (1)</span>
              </div>
            </label>

            <label>
              <div className="flex space-x-3 mb-3">
                <input
                  type="radio"
                  value={2}
                  {...register("mainDishSpiceLvl")}
                />
                <span>Spice lvl (2)</span>
              </div>
            </label>
          </div>
          {/* checkbox */}
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">Cilantro</span>
              <input type="checkbox" {...register("cilantro")} />
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">Soup</span>
              <input type="checkbox" {...register("soup")} />
            </label>
          </div>

          {/* soup spice lvl */}
          <div className={`${isSelectedSoup ? "block" : "hidden"}`}>
            <label>
              <div className="flex space-x-3 mb-3">
                <input type="radio" value={0} {...register("soupSpiceLvl")} />
                <span>Spice lvl (0)</span>
              </div>
            </label>

            <label>
              <div className="flex space-x-3 mb-3">
                <input type="radio" value={1} {...register("soupSpiceLvl")} />
                <span>Spice lvl (1)</span>
              </div>
            </label>

            <label>
              <div className="flex space-x-3 mb-3">
                <input type="radio" value={2} {...register("soupSpiceLvl")} />
                <span>Spice lvl (2)</span>
              </div>
            </label>
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

const HtaMinThope = () => {
  const { control, register, watch } = useForm({
    defaultValues: { menuName: "Hta Min Thope" },
  });

  const isSelectedSoup = watch("soup");
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
                <input type="checkbox" {...register("meatball")} />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Soup</span>
                <input type="checkbox" {...register("soup")} />
              </label>
            </div>
          </div>

          {/* soup spice lvl */}
          <div className={`${isSelectedSoup ? "block" : "hidden"}`}>
            <label>
              <div className="flex space-x-3 mb-3">
                <input type="radio" value={0} {...register("soupSpiceLvl")} />
                <span>Spice lvl (0)</span>
              </div>
            </label>

            <label>
              <div className="flex space-x-3 mb-3">
                <input type="radio" value={1} {...register("soupSpiceLvl")} />
                <span>Spice lvl (1)</span>
              </div>
            </label>

            <label>
              <div className="flex space-x-3 mb-3">
                <input type="radio" value={2} {...register("soupSpiceLvl")} />
                <span>Spice lvl (2)</span>
              </div>
            </label>
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
