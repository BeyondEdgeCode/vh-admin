import {useEffect, useState} from "react";
import {IS3Object} from "../../../types/s3";
import {getObjects} from "../../../api/s3";
import css from './objectstorage.module.css'
export const ObjectStorage = () => {
	const [s3objects, sets3objects] = useState<undefined | Array<IS3Object>>(undefined)
	useEffect(() => {
		getObjects().then(d => sets3objects(d.data));
	}, [])

	return (
		<>
			<h3>Файлы</h3>
			<h4>Список файлов:</h4>
				<div className={css.parent}>
				{
					s3objects?.map(obj =>
						<div>
							<img className={css.rowImage} src={"https://storage.yandexcloud.net/vapehookahstatic/"+obj.link} alt={""+obj.id} title={""+obj.id}/>
						</div>)
				}
				</div>
		</>
	)
}