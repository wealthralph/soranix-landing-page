import { Card, Image, Text, Button, Group } from "@mantine/core";
import { Line, Bar,  Doughnut } from "react-chartjs-2";
import { useState } from "react";
import phoneMockup from "../assets/images/image-mockups.png";
import { cards, articles } from "./sectionContent";
// import { Carousel } from '@mantine/carousel';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const MainContent = () => {
    const [sliderValue] = useState(50);

    const cardContent = cards.map((cardItem, index) => (
        <Card
            className="bg-transparent max-w-[325px] xl:max-w-[280px] min-h-[310px] mx-auto text-center pt-10 xl:mx-0 xl:text-left"
            key={index}
        >
            <Card.Section className="w-20 mx-auto xl:mx-0">
                <Image src={cardItem.img} alt={cardItem.title} />
            </Card.Section>

            <Text className="py-10 text-2xl">
                <h2>{cardItem.title}</h2>
            </Text>

            <Text className="text-grayBlue">
                <p>{cardItem.content}</p>
            </Text>
        </Card>
    ));

    const articleContent = articles.map((articleItem, index) => (
        <Card
            withBorder
            className=" max-w-[325px] xl:max-w-[280px] h-[28rem] mx-auto text-center my-10 xl:mx-0 xl:text-left rounded-lg"
            key={index}
        >
            <Card.Section>
                <Image src={articleItem.img} alt={articleItem.title} fit="cover" height={200} />
            </Card.Section>

            <Card.Section className="p-4">
                <Text className="text-grayBlue">
                    <sub>By {articleItem.author}</sub>
                </Text>

                <Text className="py-3 text-xl font-medium">
                    <h2 className="gradientText">{articleItem.title}</h2>
                </Text>

                <Text className="text-grayBlue">
                    <p>{articleItem.content}</p>
                </Text>
            </Card.Section>
        </Card>
    ));

    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "Performance",
                data: [65, 59, 80, 81, 56, 55, sliderValue],
                fill: false,
                backgroundColor: "rgb(75, 192, 192)",
                borderColor: "rgba(75, 192, 192, 0.2)",
            },
        ],
    };

    const barData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "Income",
                data: [50, 60, 70, 80, 90, 100, 110],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
            },
            {
                label: "Expenses",
                data: [30, 40, 50, 60, 70, 80, 90],
                backgroundColor: "rgb(74 222 128)",
            },
        ],
    };

    const circleData = {
        labels: ["Completed", "In Progress", "Pending"],
        datasets: [
            {
                label: "Task Status",
                data: [60, 30, 10],
                backgroundColor: ["rgb(75, 192, 192)", "rgb(255, 159, 64)", "rgb(255, 99, 132)"],
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
        },
    };

    return (
        <main className="min-h-screen bg-slate-100">
            <section
                id="landing_section"
                className="bg-lightGray flex flex-col md:flex-row-reverse justify-between items-center md:max-h-[500px] pb-20 backgroundImage"
            >
                <figure className="w-[90%] max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-[360px] md:h-auto mx-auto sm:mx-0">
                    <img
                        src={phoneMockup}
                        alt="phone mockup"
                        className=" -top-28 sm:-top-36 md:-top-12 lg:top-10 lg:-right-0"
                    />
                </figure>
                <article className="text-center md:text-left max-w-[400px] md:max-w-[360px] min-[1170px]:max-w-[390px] pl-2 lg:pl-0 mx-auto sm:mx-0">
                    <h1 className="max-w-[350px] mx-auto md:mx-0 text-4xl lg:text-5xl">
                        Next generation digital banking
                    </h1>
                    <p className="text-gray-400 my-10 md:max-w-[390px] lg:max-w-none px-2 md:px-0">
                        Take your financial life online. Your Easybank account will be a
                        one-stop-shop for spending, saving, budgeting, investing, and much more.
                    </p>
                    <Button className="gradientButton opacityHover rounded-md  pl-6 pr-6 pt-2 pb-2 marker:selection:">Request Invite</Button>
                </article>
            </section>
            <section className="flex flex-col justify-evenly items-center min-h-[700px]">
                <article className="w-full mt-12 text-center xl:text-left">
                    <h2 className="text-3xl lg:text-4xl mb-5">Why Choose Easybank?</h2>
                    <p className="mb-10 max-w-[600px] mx-auto xl:mx-0 text-grayBlue">
                        We leverage Open Banking to turn your bank account into your financial hub.
                        Control your finances like never before
                    </p>
                </article>
                <Group className="p-4 w-full grid grid-cols-4 ml-10" position="apart">
                    {cardContent}
                </Group>
            </section>
            <section className="flex flex-row justify-between p-5 bg-white w-full mt-11">
    <Card shadow="sm" padding="lg" className="w-[700px]">
        <Card.Section className="p-4">
            <Text className="text-xl font-medium mb-4">Performance Overview</Text>
            <Line data={lineData} options={options} className="w-full" />
        </Card.Section>
        <Text className="mt-4">
            This line chart represents the performance over the first half of the year.
        </Text>
    </Card>

  
    <Card shadow="sm" padding="lg" className="w-[700px]">
        <Card.Section className="p-4">
            <Text className="text-xl font-medium mb-4">Income vs Expenses</Text>
            <Bar data={barData} options={options} className="w-full" />
        </Card.Section>
        <Text className="mt-4">
            This bar chart compares the income and expenses from Jan to Jul.
        </Text>
    </Card>

    <Card shadow="sm" padding="lg" className="w-[400px] mr-10 items-center">
        <Card.Section className="p-4">
            <Text className="text-xl font-medium mb-4">Task Status Breakdown</Text>
            <Doughnut data={circleData} options={options} className="w-full" />
        </Card.Section>
        <Text className="mt-4">
            This doughnut chart shows the current status of tasks: completed, in progress, and pending.
        </Text>
    </Card>
</section>

            <section className="flex flex-col justify-evenly items-start min-h-[700px] bg-slate-100">
                <h2 className="text-3xl lg:text-4xl mb-5 w-full mt-12 text-center xl:text-left">
                    Latest Articles
                </h2>
                <Group className="w-full grid grid-cols-4" position="apart">
                    {articleContent}
                </Group>
            </section>
        </main>
    );
};

export default MainContent;
