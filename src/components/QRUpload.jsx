import { useState } from "react";
import ImageUploading from "react-images-uploading";
import dummyQR from "../assets/images/QR_Code_Example.svg";
import { PencilIcon } from "@heroicons/react/24/outline";

const QRUpload = ({ currentQR, setNewUploadedQR, isNew }) => {
	const [images, setImages] = useState([]);
	const maxNumber = 1;
	const onChange = (imageList) => {
		setImages(imageList);
		setNewUploadedQR(imageList[0].data_url);
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
						<div className="avatar">
							{isNew ? (
								<div className="indicator">
									<span className="indicator-item indicator-bottom badge badge-secondary">
										<PencilIcon
											className="absolute p-2 bg-primary right-2 bottom-1 w-8 h-8"
											onClick={() => onImageUpload(0)}
										/>
									</span>
									<div className={`w-36 rounded-full`}>
										<img
											src={
												imageList.length !== 0 ? imageList[0].data_url : dummyQR
											}
										/>
									</div>
								</div>
							) : (
								<>
									<div className="indicator">
										<span className="indicator-item indicator-bottom badge badge-secondary">
											<PencilIcon
												className="absolute p-2 bg-primary right-2 bottom-1 w-8 h-8"
												onClick={() => onImageUpdate(0)}
											/>
										</span>
										<div className={`w-36 rounded-full`}>
											<img
												src={
													imageList.length !== 0
														? imageList[0].data_url
														: currentQR
												}
											/>
										</div>
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

export default QRUpload;
