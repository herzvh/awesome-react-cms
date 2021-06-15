import React, {useState, useRef, ReactElement} from 'react';
import JoditEditor from "jodit-react";
import {Button, Container, Typography} from '@material-ui/core';
import Box from "@material-ui/core/Box";
import ReactHtmlParser from 'react-html-parser';

function App() {
  const editor = useRef(null)
	const [content, setContent] = useState('');
	const [showRendered, setShowRendered] = useState<boolean>(false);

	const handleSaveBtn = () => {
		setShowRendered(true);
	}
	
	return (
		<React.Fragment>
			<Box mt={4}>
				<Container maxWidth="md">
					<JoditEditor
						ref={editor}
						value={content}
						onBlur={newContent => setContent(newContent)}
					/>
					<Box display="flex" mt={2}>
						<Button
							color="primary"
							variant="contained"
							size="large"
							onClick={handleSaveBtn}
						>
							Sauvegarder
						</Button>
					</Box>
					{
						showRendered &&	 (
							<Box mt={3}>
								<Typography variant="h5">
									Rendu
								</Typography>
								{ReactHtmlParser(content)}
							</Box>
						)
					}
				</Container>
			</Box>
		</React.Fragment>
      );
}

export default App;
