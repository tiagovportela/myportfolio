import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Text
  } from '@chakra-ui/react'
  import Layout from '../../compoments/layouts/article' 
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, PostImage, Meta, Subtitle, PostCode, PostParagraph } from '../../compoments/post'
 
//   import ReactEmbedGist from 'react-embed-gist';
  
  const Post = () => {
      return (
          <Layout title='Stroke Classification of Elite Paddlers'>
            <Container>
                <Title>
                Stroke Classification of Elite Paddlers <Badge>2018-2019</Badge>
                </Title>
                <PostParagraph>
                    Development of a method to classify elite rowers&apos; strokes.
                </PostParagraph>
                {/* <Text fontSize="md">Development of a method to classify elite rowers&apos; strokes.</Text> */}

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Numpy, Pandas, Matplotlib, Scipy, Scikit-learn</span>
                    </ListItem>
                    
                </List>
                
                <PostParagraph>
                One of the most important challenges in the competitive Kayaks production industry is figuring out whether a new model performs better and where it can be improved. This task is not trivial, as it is not always clear how to measure performance as well as ensure that tests are performed under similar conditions.
                </PostParagraph>
                
                <PostParagraph>
                Ideally, the metric that best represents boat performance is speed, but it is not always possible to guarantee similar conditions between tests, as there are many variables to consider - for example, water current, wind direction and speed, and athlete's performance .
                </PostParagraph>
                
                <PostParagraph>
                If the environmental variables are easy to verify, the athlete's performance proves to be an arduous task. Thus, a systematic method of evaluating the athlete's performance is imperative.
                </PostParagraph>

                <PostParagraph>
                To mitigate this problem a form of classification of the athlete's strokes was developed. In this way, it is possible to verify if in a series (exercise), there was a similar number of good strokes.
                </PostParagraph>

                <PostParagraph>
                For this task, we used a data acquisition system (DAS) consisting of an inertial sensor (IMU) and a web server, plus an Android application, which allows recording and synchronizing video frames with DAS data.
                </PostParagraph>

                <PostImage src="/images/posts/StrokeClassification/reference_frame.png" alt="DAS Reference Frame" legend="Fig1 - DAS Reference Frame"/>

                <PostParagraph>
                Com isto, foram coletados vários dados durante uma sessão de treino.
                </PostParagraph>

                <PostImage src="/images/posts/StrokeClassification/das_signal_rotations.jpeg" alt="Rotation Signal" legend="Fig1 - Rotation Signals"/>
                <PostImage src="/images/posts/StrokeClassification/das_signal_translation.jpeg" alt="Translation Signal" legend="Fig1 - Translation Signals"/>

                <Subtitle>
                    Stroke Fases Division
                </Subtitle>
                
                <Text fontSize="md">&quot;Canoe paddle strokes are the means by which a paddle (or paddles) is used to move a canoe through the water.&quot;;</Text>

                <Text fontSize="md">For this study, it is important to divide the stroke into its various components or phases.</Text>
                <Text fontSize="md">From the observation of the movement of the <i>boat-paddle-athlete</i> system, we can divide the different phases according to the image below:</Text>
                <PostImage src="/images/posts/StrokeClassification/Observational-model-for-kayak-analysis-including-two-levels-of-analysis-phases-and.png" alt="stroke fases" legend="Fig1 - Stroke Fases"/>
                
                <PostImage src="/images/posts/StrokeClassification/strokes.jpeg" alt="strokes" legend="Fig2 - Strokes"/>
                
                
                <Text fontSize="md">Observing the signal above we can see that there are 3 strokes (3 peaks), considering that the loss of acceleration is maximum at the exact moment before the paddle enters the water, we can say that the phase in the water starts at this point and lasts until first negative peak, entering area phase</Text>
                <Text fontSize="md">The entry lasts until the maximum acceleration point, then entering the pull phase which lasts until the acceleration is negative, entering the exit face </Text> 
                
                <PostImage src="/images/posts/StrokeClassification/stroke.jpeg" alt="stroke" legend="Fig3 - Stroke Acceleration Profile"/>
                {/* <PostImage src="/images/stroke_classification.png" alt="stroke" legend="Acceleration Profile of a Stroke"/> */}

                <Text fontSize="md">The best way to detect the entry point of stroke is first to find ther maxima - PEAK. For that I will use the function

                <Link href="https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.find_peaks.html" isExternal> find_peaks <ExternalLinkIcon mx="0px" /> </Link>
                                
                from scipy module
                </Text>

                <Text fontSize="md">This function takes a 1-D array and finds all local maxima by simple comparison of neighboring values. Optionally, a subset of these peaks can be selected by specifying conditions for a peak&apos;s properties.</Text>
                <Text fontSize="md">Since it is humanly impossible for a stroke to see shorter than 0.3 seconds, we can specify the distance parameter as 30 - Since the sample frequency is of 100 Hz, 0.3 seconds corresponds to 30 points.</Text>
                {/* <ReactEmbedGist gist="tiagoportelanelo/056208599a145077c995e9387c6aac85"/> */}
                
                <Text fontSize="md">
                    <PostCode>
                    <p>peaks, _ = find_peaks(start_data.ax, distance=30)</p>
                    <p>for element in list:</p>
                    <p>&emsp;&emsp;&emsp;element + 1 </p>
                    </PostCode>
                    {/* <Code alignContent="center" mb={0} mt={0}>
                        peaks, _ = finsdasdd_peaks(start_data.ax, distance=30)
                    </Code> */}

                    {/* <Stack direction="column">
                        <Code children="peaks, _ = finsdasdd_peaks(start_data.ax, distance=30)" />
                        <Code children="peaks, _ = finsdasdd_peaks(start_data.ax)'" />
                        <Code children="npm install chakra" />
                    </Stack> */}

                </Text>

            </Container>
          </Layout>
      )
  }
  
  export default Post