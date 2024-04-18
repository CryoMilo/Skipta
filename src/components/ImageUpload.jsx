import { useState } from "react";
import ImageUploading from "react-images-uploading";
import dummyProfile from "../assets/images/dummyProfile.jpg";
import EditIcon from "../assets/icons/EditIcon";
import { PencilIcon } from "@heroicons/react/24/outline";

const ImageUpload = ({ currentProfileImg, setNewUploadedImg, isNew }) => {
	const [images, setImages] = useState([]);
	const maxNumber = 1;
	const onChange = (imageList) => {
		setImages(imageList);
		setNewUploadedImg(imageList[0].data_url);
	};

	return (
		<div>
			<ImageUploading
				multiple
				value={images}
				onChange={onChange}
				maxNumber={maxNumber}
				dataURLKey="data_url"
				acceptType={["jpg", "png", "svg"]}>
				{({ imageList, onImageUpload, onImageUpdate }) => (
					<>
						<div className="avatar my-10 relative">
							{isNew ? (
								<>
									<div className={`w-36 rounded-full`}>
										<img
											src={
												imageList.length !== 0
													? imageList[0].data_url
													: dummyProfile
											}
										/>
									</div>

									<PencilIcon
										className="absolute rounded-full p-2 bg-primary right-2 bottom-1"
										onClick={onImageUpload}
									/>
								</>
							) : (
								<>
									<div className={`w-36 rounded-full`}>
										<img
											src={
												imageList.length !== 0
													? imageList[0].data_url
													: currentProfileImg
											}
										/>
									</div>
									<div
										onClick={() => onImageUpdate(0)}
										className="absolute rounded-full p-2 bg-primary right-2 bottom-1">
										<EditIcon />
									</div>
								</>
							)}
						</div>
					</>
				)}
			</ImageUploading>
		</div>
	);
};

export default ImageUpload;
