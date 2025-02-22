import { Form } from 'react-router-dom'
import locationIcon from '../../../assets/plastic-post/location.png'
import bottleIcon from '../../../assets/plastic-post/bottle.png'
import bagIcon from '../../../assets/plastic-post/bag.png'
import mixedIcon from '../../../assets/plastic-post/mixedMaterial.png'
import './NewPost.css'

export default function NewPost() {
    return (
        <section className="new-post">   
            <h1>Add Plastic Report</h1>
            <Form method='post'>
                <div className="title">
                    <input type="text" name="title" id="title" placeholder='Post title...'/>
                    <div className="location">
                        <img src={locationIcon} alt="location icon" />
                        <input type="text" name="location" id="location" placeholder='Location...'/>
                    </div>
                </div>
                <div className="content">
                    <div className="row">
                        <label htmlFor="description">Description</label>
                        <textarea 
                            name="description" 
                            id="description" 
                            placeholder='Explain the source of your plastic waste and specify the types of plastics you have collected...'
                        ></textarea>
                    </div>
                    <div className="icons-row">
                        <div className="icon">
                            <img src={bottleIcon} alt="bottle icon" />
                            <label htmlFor="bottles">Bottles</label>
                            <input type="number" name="bottles" id="bottles" />
                        </div>
                        <div className="icon">
                            <img src={bagIcon} alt="bag icon" />
                            <label htmlFor="bags">Bags</label>
                            <input type="number" name="bags" id="bags" />
                        </div>
                        <div className="icon">
                            <img src={mixedIcon} alt="other materials icon" />
                            <label htmlFor="other">Other Materials</label>
                            <input type="number" name="other" id="other" />
                        </div>
                    </div>
                </div>
                <button className='submit-report-btn'>Submit Report</button>
            </Form>
        </section>
    )
}
