import {useEffect, useState} from "react";
import {IImageCarousel} from "../../../types/global";
import {icGet, s3URL} from "../../../api/api";
import {addICObject, getICObjects, updateICObject} from "../../../api/ic";
import css from './ImageCarousel.module.css'
import {SecondaryButton} from "../../ui-kit/buttons/secondaryButton/secondaryButton";
import {UniversalPopup} from "../../ui-kit/popups/universal/UniversalPopup";
import {PrimaryButton} from "../../ui-kit/buttons/primaryButton/primaryButton";
import {IS3Object} from "../../../types/s3";
import {getObjects} from "../../../api/s3";

export const ImageCarousel = () => {
	const [ic, setIc] = useState<Array<IImageCarousel>>([]);
	const [s3, setS3] = useState<Array<IS3Object>>([]);

	const [popupOpen, setPopupOpen] = useState(false);
	const [imagePopupOpen, setImagePopupOpen] = useState(false);
	const [bannerAddPopupOpen, setBannerAddPopupOpen] = useState(false);
	const [popupObject, setPopupObject] = useState<IImageCarousel>({image_id: 0, image_link: "", active: true, id: 0})

	useEffect(() => {
		getICObjects().then(obj => setIc(obj.data));
		getObjects().then(obj => setS3(obj.data));
	},[])

	return (
		<div className={css.container}>
			<h3>Баннеры на главной</h3>
			<div className={css.controlButtons}>
				<PrimaryButton onClick={()=> setBannerAddPopupOpen(true)} title={"Добавить"}/>
			</div>

			<UniversalPopup isOpen={popupOpen} setOpen={setPopupOpen} title={'Изменение карусели'} content={
				<div>
					<div className={css.popupFlexColumn}>
						<div className={css.popupFlexRow}>
							<h5>Изображение</h5>
							<SecondaryButton payload={()=> {setImagePopupOpen(true)}} title={"Изменить"}/>
						</div>
						<img className={css.popupImage} src={popupObject.image_link} alt=""/>
					</div>
					<div className={css.popupFlexRow}>
						<h5>Активность</h5>
						<input type="checkbox" checked={popupObject.active} onChange={()=>
							setPopupObject({
								id: popupObject.id,
								image_link: popupObject.image_link,
								image_id: popupObject.image_id,
								active: !popupObject.active})
						}/>

					</div>
					<div className={css.popupFlexRow}>
						<PrimaryButton onClick={() => {
							updateICObject(popupObject).then(d => {
								console.log('Data changed')
								setPopupOpen(false);
								getICObjects().then(obj => setIc(obj.data));
							}).catch(reason => alert(`Ошибка: ${reason}`))
						}} title={'Сохранить'}/>
						<SecondaryButton payload={() => setPopupOpen(false)} title={'Закрыть'}/>
					</div>
				</div>
			}/>

			<UniversalPopup isOpen={imagePopupOpen} setOpen={setImagePopupOpen} title={'Выбор изображения'} content={
				<div className={css.imagePopupGridContainer}>
					{s3.map(obj =>
						<img
							className={css.selectorPopupImage}
							src={s3URL+obj.link}
							alt={`${obj.id}`}
							onClick={() => {
								setPopupObject({
									id: popupObject.id,
									image_link: s3URL+obj.link,
									image_id: obj.id,
									active: popupObject.active});
								setImagePopupOpen(false);
							}
						}
						/>
					)}
				</div>
			}/>

			<UniversalPopup title={'Добавление баннера'} isOpen={bannerAddPopupOpen} setOpen={setBannerAddPopupOpen} content={
				<div>
					<div className={css.popupFlexColumn}>
						<div className={css.popupFlexRow}>
							<h5>Изображение</h5>
							<SecondaryButton payload={()=> {setImagePopupOpen(true)}} title={"Изменить"}/>
						</div>
						<img className={css.popupImage} src={popupObject.image_link} alt=""/>
					</div>
					<div className={css.popupFlexRow}>
						<h5>Активность</h5>
						<input className={css.popupCheckbox} type="checkbox" checked={popupObject.active} onChange={()=>
							setPopupObject({
								id: popupObject.id,
								image_link: popupObject.image_link,
								image_id: popupObject.image_id,
								active: !popupObject.active})
						}/>
					</div>
					<div className={css.popupFlexRow}>
						<PrimaryButton onClick={() => {
							addICObject(popupObject).then(d => {
								console.log('Data changed')
								setBannerAddPopupOpen(false);
								getICObjects().then(obj => setIc(obj.data));
							}).catch(reason => alert(`Ошибка: ${reason}`))
						}} title={'Добавить'}/>
						<SecondaryButton payload={() => setPopupOpen(false)} title={'Закрыть'}/>
					</div>
				</div>

			}/>

			<table className={css.table}>
				<thead className={css.tableTh}>
					<td className={css.tableTd}>Изображение</td>
					<td className={css.tableTd}>Активность</td>
					<td className={css.tableTd}>Управление</td>
				</thead>
				<tbody>
				{ic.map(obj => <tr className={css.tableTr}>
						<td className={css.tableTd}><img className={css.carousel_image} src={obj.image_link} alt=""/></td>
						<td className={css.tableTd}>{obj.active ? "Отображается" : "Скрыто"}</td>
						<td className={css.tableTd}>
							<SecondaryButton payload={()=> {setPopupOpen(true); setPopupObject(obj)}} title={"Редактировать"}/>
						</td>
					</tr>
				)}
				</tbody>
			</table>
		</div>
	)
}